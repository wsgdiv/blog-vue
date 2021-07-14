<template>
	<div id="">
		<output id="result">12356</output>
		<h2>申请磁盘配额</h2>
		<form action="" method="post">
			<input type="text" id="capacity" value="1024"/>
			
			<input type="button" value="申请磁盘配额"/>
		</form>
	</div>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				value: ""
			}
		},
		mounted: function() {
			window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
			var fs = null;
			if(window.requestFileSystem) {
				console.log("您的浏览器已实现FileSystem");
				initFS();

				function initFS() {
					window.requestFileSystem(window.PERSISTENT, 5 * 1024 * 1024,
						function(filesystem) {
							fs = filesystem;
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
					document.getElementById("result").innerHTML = "当前操作引发错误：" + msg;

				}
			}
		},
		methods:{
			
		}
	}
</script>

<style>

</style>