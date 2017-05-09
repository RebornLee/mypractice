
# git项目管理工具

## 初始化
- git init; 创建.get隐藏文件夹为仓储空间;
## 添加用户名和邮箱
- git config --global user.name "用户名"; 
	+ 添加全局用户名
- git config --global user.email "邮箱地址"; 
	+ 添加全局邮箱
- git config --list;
	+ 查看配置信息;
## 添加备份
- git add ./(文件路径)  
	+ 把单独的文件放到准备区
(- git add ./` 
	+ 把所有的文件放到准备区)
- git commit -m "文件信息" 
	+ 把单独的文件放到准备区(-git commit --all -m "文件信息"  把所有修改的文件放到版本库中)
(没加m 进入编辑器模式 ESC+: q 退出)
## 查看状态
- git status ; 
## 忽略文件
- .gitignore,在文件中书写需要忽略的文件的路径，以/开头，一行写一个路径，这些路径所对应的文件都会被忽略，不提交到仓储中
* `/.idea ` 会忽略.idea文件
* `/js`     会忽略js目录得所有文件
* `/js/*.js`会忽略js目录中的所有js文件

## 查看日志
- git log 查看历史日志
- git log --oneline 查看简洁版日志

##恢复到之前保存的版本
- git reset --hard Head~0
(Head~0 指向之前最后一个备份的文件 依次向前推)

## 查看之前所有修改过的记录 
- git reflog

## 创建分支
- git branch 分支名;
## 查看分支
- git branch
## 切换分支
- git checkout 分支名;
## 合并分支
- git merge 分支名;

- 合并时如果有冲突 需要进行手动处理 ，处理好后还需要再次提交一次;

## 提交代码到github(当做git服务器使用)
- git push 地址 + master(主分支对应);

- git pull 地址 + master(默认主分支);
需要本地有个仓储 即 git init；

- git clone 地址 + master;
会在本地新建一个文件夹 名字与远程仓库名相同;
如果多次执行会覆盖本地内容



## SSH上传方式
- 公钥 和 私钥
- 公钥生成：ssh-keygen -t rsa -C "邮箱";
- 生成位置(c:/user/用户名/.ssh) 复制id_rsa.pub内的内容在github settings中创建ssh key  即可;

#### 提交到服务器之前 需要先pull获取服务器最新版本 然后在push到服务器

## origin
- git remote add origin "服务器地址" 
- git pull/push origin master;
- git push origin -u master—— git push/git pull




## npm 初始化 
- npm init 初始化生成package.json 
- npm install 工具名 --save
	+ 在package.json 中生成工具版本信息;
- 之后传的文件不需要传工具;
