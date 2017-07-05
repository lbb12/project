var myvue={
	data(){
		return {
			msg:'myvue1 msg'
		}
	},
	props:['nes', 'num'],
	template:`<h3 @click="changeNes()">{{nes}}{{num}}</h3>`,
	mounted(){
		let that = this;
	},
	methods:{
		changeNes(){
			this.num = Number(this.num) + 100;
		}
	}
};
var vm = new Vue({
	el:'.box',
	data:{
		msg:'i am msg',
		parentNes:'i am nes'
	},
	mounted:function(){

	},
	components:{
		myvue
	},
	methods:{
		
	}
});