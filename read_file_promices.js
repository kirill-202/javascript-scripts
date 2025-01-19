import { promises as fs } from "fs";

const folderPath = "./test";


async function readFiles(folderPath) {
    try {
      const files = await fs.readdir(folderPath);
      console.log("Files:", files);
  
      for (const file of files) {
        const filePath = `${folderPath}/${file}`;
        const content = await fs.readFile(filePath, "utf-8");
        console.log(`Content of ${file} = ${content}`);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  }
  
 await readFiles(folderPath);