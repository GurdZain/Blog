var Blog = require('./proxy').Blog;
var readline = require('readline');
var colors = require('colors');
var path = require('path');
//var program = require('commander');

var tags_array = [];
var cat_str = '';
var banner = " _   _       _                 _\n| | | |_ __ | | ___   __ _  __| |___\n| | | | '_ \\| |/ _ \\ / _` |/ _` / __|\n| |_| | |_) | | (_) | (_| | (_| \\__ \\\n\\___/| .__/|_|\\___/ \\__,_|\\__,_|___/\n     |_|";

//设置欢迎界面
function menu(){
	console.log(banner.green);
	if (process.argv.length <= 2){
		console.log("[ERROR]: Useage is node upload.js file_name".red);
		process.exit(0)
	}else{
		get_tags();
	}
}

//获取 tag 信息
function get_tags(){
	var rl = readline.createInterface({
		input:process.stdin,
		output:process.stdout
	});

	rl.setPrompt('请输入 tags , exit 结束> ');
	rl.prompt();

	rl.on('line', function(line){
		switch(line.trim()){
			case 'exit':
				//process.exit(0);
				rl.close();
				break;
			default:
				tags_array.push(line);
				rl.prompt();
				break;
		}
	});

	rl.on('SIGINT', () => {
		rl.question('Are you sure you want to exit?', (answer) => {
			if (answer.match(/^y(es)?$/i)) process.exit(0);
		});
	});

	rl.on('close',function(){
		get_cat();
	});
}

//获取cat信息
function get_cat(){
	var rl2 = readline.createInterface({
		input:process.stdin,
		output:process.stdout
	});

	rl2.on('SIGINT', () => {
		//rl2.question('Are you sure you want to exit?', (answer) => {
		//	if (answer.match(/^y(es)?$/i)) process.exit(0);
		//});
		process.exit(0);
	});

	rl2.question('请输入 cat >', function(cat){
		cat_str = cat;
		rl2.close();
	});

	rl2.on('close',function(){
		get_info();
	});
}

//获取所有信息并入库。
function get_info(){
	console.log(tags_array,cat_str);
	var arg = process.argv[2];
	var file_name = path.basename(arg, '.md');
	var ab_file_path = path.resolve(arg);
	Blog.addBlog(file_name, Date.now(), tags_array, ab_file_path, cat_str)
		.then(function(){
			process.exit(0);
		})
		.catch(function(err){
			console.log(err)
		});
}

menu();

