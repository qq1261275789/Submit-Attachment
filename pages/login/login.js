var app = new Vue({
        el:"#loginBox",
        data:{
            userId:"",
			password:"",
            note:"",
            loginMethod:0,
            isChecked:false,
            isPasswdHide:true,
            checkImgSrc:"weigouxuan.png",
            hideImgSrc:"icon-test.png",
        },
        methods:{
            choicePasswdLogin:function () {
                console.log("进入密码登录");
                this.loginMethod = 0;
            },
            choiceNoteLogin:function () {
                console.log("进入短信登录");
                this.loginMethod = 1;
            },
            choiceAdminLogin:function () {
                console.log("进入管理员登录");
                this.loginMethod = 2;
            },
            doCheck:function () {
                this.isChecked = !this.isChecked;
                if (this.isChecked == true){
                    this.checkImgSrc = "xuanzhong.png";
                } else {
                    this.checkImgSrc = "weigouxuan.png";
                }
            },
            doHide:function () {
                this.isPasswdHide = !this.isPasswdHide;
                if (this.isPasswdHide == true){
                    this.hideImgSrc = "icon-test.png";
                } else {
                    this.hideImgSrc = "icon-test-3.png";
                }
            },
        }
    })