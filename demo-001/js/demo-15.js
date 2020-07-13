// 获取城市天气接口 ：http://wthrcdn.etouch.cn/weather_mini?city=
var app = new Vue ({
    el:"#app",
    data:{
        city:"广州",
        hotcity:["北京","上海","广州","深圳"],
        weatherlist:[],
        ifloading: false
    },
    mounted:function(){
        this.selectcity(this.city);
    },
    methods:{
        serchWeather:function(){
            var that = this;
            that.ifloading = true;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(function(response){
                if(response.data.status == 1000){
                    console.log(response.data.data.forecast);
                    that.weatherlist = response.data.data.forecast;
                }else{
                    alert("未查到"+that.city+"的天气预报");
                }
                that.ifloading = false;
            },function(err){
                console.log(err);
                alert("未查到"+that.city+"的天气预报");
            })
        },
        selectcity:function(city){
            this.city = city;
            this.serchWeather();
        }                      
    }
})
