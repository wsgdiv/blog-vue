<template>
	<div>
		<div class="mavon-editor">
			<mavon-editor id="editor" :placeholder="'开始创作···'" :toolbarsBackground="'#f9f9f9'"
				 v-model="value" :ishljs="true" ref="md" @save="createFile()" />
		</div>
		<div id="result"></div>
		<input type="button" name="" id="" value="创建文件" @click="createFile()" />
	</div>

</template>

<script>
	import marked from 'marked'
	import markdownEditor from "../../components/markdown-editor.vue"
	export default {
		components: {
			markdownEditor
		},
		data() {
			return {
				value: ""
			}
		},
		methods: {
			createFile: function() {
				window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
				
				var that = this;
				if(window.requestFileSystem) {
					console.log("您的浏览器已实现FileSystem");
					initFS();

					function initFS() {
						window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024,
							function(filesystem) {
								var fs = null;
								fs = filesystem;
								//创建文件
								fs.root.getFile(
									name, {
										create: true
									},
									function(e) {
										//创建createWriter
										e.createWriter(
											function(fileWriter) {
												fileWriter.onwriteend = function(e) {
													alert('写入完成。');
												};
												fileWriter.onerror = function(e) {
													alert('写入失败。');
												};
												var blob = new Blob(['123']);
												fileWriter.write(blob);
											},
											errorHandler);
									},
									errorHandler);
							}, errorHandler);
					}

					function errorHandler(e) {
						var msg = '';
						switch(e.code) {
							case FileError.QUOTA_EXCEEDED_ERR:
								msg = 'QUOTA_EXCEEDED_ERR';
								break;
							case FileError.NOT_FOUND_ERR:
								msg = 'NOT_FOUND_ERR';
								break;
							case FileError.SECURITY_ERR:
								msg = 'SECURITY_ERR';
								break;
							case FileError.INVALID_MODIFICATION_ERR:
								msg = 'INVALID_MODIFICATION_ERR';
								break;
							case FileError.INVALID_STATE_ERR:
								msg = 'INVALID_STATE_ERR';
								break;
						};
						alert("当前操作引发错误：" + msg);
//						document.getElementById("result").innerHTML = "当前操作引发错误：" + msg;

					}
				} else {
					alert("您的浏览器已实现FileReader接口");
				}
			}

		}

	}
</script>

<style>
	.mavonEditor {
		width: 100%;
		height: 100%;
	}
	
	#msg {
		width: 600px;
		height: 200px;
		position: fixed;
		left: 20%;
		top: 400px;
		border: 1px solid #000000;
	}
	
	#editor {
		position: fixed;
		width: 80%;
		height: 300px;
		z-index: -1000;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	.vue-demo {
		width: 400px;
		margin: 0 30px;
	}
	
	.txt {
		width: 200px;
		height: 25px;
		line-height: 24px;
		border-radius: 5px;
	}
</style>