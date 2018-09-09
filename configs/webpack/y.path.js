var path = require("path");
let glob = require('glob');

function getEntry() {

    var globresolve='./src/**/*.ts';
    //获取globresolve路径下的所有文件
    let files = glob.sync(globresolve);
    let entries = {},
        entry, dirname, basename, resolvename, extname;
    //循环
    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);//返回路径的所在的文件夹名称
        extname = path.extname(entry);//返回指定文件名的扩展名称
        /**
         * resolve.basename(p, [ext])
         * 返回指定的文件名，返回结果可排除[ext]后缀字符串
         * resolve.basename('/foo/bar/baz/asdf/quux.html', '.html')=>quux
         */
        basename = path.basename(entry, extname);
        resolvename = path.join(dirname, basename);//路径合并
        let key= path.relative('./src',resolvename).replace(/\\/g,'/');
        //console.log('Test Key :'  + key);
        if (/(\blib\b)|(test)|(template)|(common)|(html)|(mock)/.test(key) === false) {
            entries[key] = "./" + key;
            //console.log("OK key=" + key);
        }
        //console.log(key);
       
    }
    //返回map=>{fileName:fileUrl}
    console.log("Hello -----");
    console.dir(entries);
    return entries;
  }
 
module.exports= {
    getEntry
}