<template>

	<div>
		<navTheme></navTheme>

		<div id="img-mine">
			<img src="../assets/weixin-mine.png" />

		</div>
		<div id="divider-line"></div>
		<div class="block-line">
			<div class="radio">
				<span id="span-title">时间线：</span>
				<el-radio-group v-model="reverse" id="group-rev">
					<el-radio :label="true">正序</el-radio>
					<el-radio :label="false">倒序</el-radio>
				</el-radio-group>
			</div>

			<el-timeline :reverse="reverse">
				<el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
					{{activity.content}}
				</el-timeline-item>
			</el-timeline>
		</div>

	</div>
</template>

<script>
	import navTheme from '../components/nav-theme.vue'
	export default {
		components: {
			navTheme
		},
		data() {
			return {
				msg:",",
				reverse: true,
				activities: [{
					content: '活动按期开始',
					timestamp: '2018-04-15'
				}, {
					content: '通过审核',
					timestamp: '2018-04-13'
				}, {
					content: '',
					timestamp: '2018-04-11'
				}]

			}
		}
	}
</script>

<style scoped>
	#img-mine {
		background-color: #FFFFCC;
		background-size: 100% 100%;
		position: fixed;
		left: 0;
		top: 0;
		min-height: 100vh;
		min-width: 100vw;
		z-index: -1000;
	}
	
	img {
		height: 35%;
		width: 18%;
		position: fixed;
		left: 10%;
		top: 35%;
	}
	
	#divider-line {
		border: 1px solid #0A0303;
		height: 68%;
		position: fixed;
		top: 25%;
		left: 38%;
	}
	.block-line {
		position: fixed;
		top: 50%;
		left: 60%;
		display: none;

	}
	#span-title {
		font-size: 25px;
		position: absolute;
		top: -55%;
		left: -10%;
	}
	#group-rev {
		position: absolute;
		top: -35%;
		left: 10%;
	}
</style>