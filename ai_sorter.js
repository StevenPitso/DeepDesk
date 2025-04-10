

/*
*   This the brain or CNS of this project
*   we need to  use the predictor "predict.py and use js to validate file formattes mostly extentsions create folders"
*   for now I know I need a us filehandling operations
*/
const fs = require("fs");
const path = require("path");

const TARGET_DIR = "/FILEPATH/"; // Directory or Folder you want to sort folders.

const {spawnSync} = require("child_process") // maybe of sub_process


function predictCategory(text){
   // use the predict.py here somehow somehow. 
   const result = spawnSync("python", ["predict.py"] ,text,{
     encoding: "utf-8"
   });
   return result.stdout.trim();
}

function sortFiles(folderPath){
   /// folders  creation  and placement of files .....
   const files = fs.readdirSync(folderPath);



   for(const file of files){

    const fullPath = path.join(folderPath, file);

    if(!fs.lstatSync(fullPath).isFile()) continue;
    if(!file.endsWith(".txt")) continue;


    const content = fs.readFileSync(fullPath, utf-8);
    const predicted = predictCategory(content);


    const targetDir = path.join(folderPath, predicted);
    if(fs.existsSync(targetDir)) fs.mkdirSync(targetDir);
    
    fs.renameSync(fullPath, path.join(targetDir, file));

    console.log(` Moved : ${file}  -> ${predicted}/`);
   }


}

sortFiles(TARGET_DIR);
