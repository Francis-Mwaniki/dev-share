// pages/api/upload.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import formidable, { File } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

const ensureDirExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    ensureDirExists(uploadDir);

    const form = new formidable.IncomingForm();
     

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = files.file as unknown as File;
      const filePath = file.filepath.replace(/^.*[\\\/]/, '');

      return res.status(200).json({ filePath });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
