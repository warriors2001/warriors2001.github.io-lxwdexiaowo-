

        function init_onlyyou(){
            // 鍒濆鍖栦袱涓猟iv鐨勯珮搴�
            $("#div_onlyyou").css({"height":$(window).height()+260+"px"});
            $("#div_oy_inner").css({"height":$(window).height()+260+"px"});

            // 璁剧疆鑷畾涔夎儗鏅�
            var start_bg_img=start_content['bg_img'];
            if(typeof(start_content['bg_style'])!='undefined' && start_content['bg_style']=='bg_custom'){
                if(typeof(start_bg_img)!='undefined' && start_bg_img!=''){
                    $("#div_onlyyou").css({"background-image": 'url('+start_bg_img+')'});
                }
            }


            if(typeof(start_content['chase_title'])!='undefined' && start_content['chase_title']!=''){
                $('.div_oy_text h1').html(start_content['chase_title']); //鍔犺浇鑷畾涔夊唴瀹�
            }else{
                $('.div_oy_text h1').html('鍋氭垜濂虫湅鍙嬪ソ涓嶅ソ'); //璁剧疆榛樿鍊�
            }

            if(typeof(start_content['chase_text'])!='undefined' && start_content['chase_text']!=''){ 
                $('.div_oy_text .p_oy_text').html(start_content['chase_text']); //鍔犺浇鑷畾涔夊唴瀹�
            }else{ //璁剧疆榛樿鍊�
                $('.div_oy_text .p_oy_text').html('灏忓彲鐖憋紝鎴戝枩娆綘濂戒箙浜嗐€備笉鍙槸閬囪浣狅紝鍗充娇鍙槸鎯宠捣浣狅紝閮戒細璁╂垜灏忛箍绐佺獊鍦颁贡鎾炪€傛垜涓€瀹氫細濂藉ソ鍦扮柤浣狅紝浣犲仛鎴戝コ鏈嬪弸濂戒笉濂斤紵');
            }
            
            // 璁剧疆姝ｆ枃涔嬪墠鐨勭収鐗�
            if(typeof(start_content['img_bool'])!='undefined' && start_content['img_bool']=='img_true'){ //濡傛灉璁剧疆浜嗙収鐗囧氨鏄剧ず
                if(typeof(start_content['img_src'])!='undefined' && start_content['img_src']!=''){
                    $(".img_oy_text").attr('src', start_content['img_src']);
                }
            } 
            if(typeof(start_content['img_bool'])=='undefined' || typeof(start_content['chase_text'])=='undefined'){
                var random_img=random_img_as();
                $(".img_oy_text").attr('src', random_img);
            }
        } 


        var array_oy_benefit; 
        //鍔犺浇鍐呭鎴栬缃粯璁ゅ€�
        if(typeof(start_content['chase_benefit'])!='undefined'){
            array_oy_benefit=start_content['chase_benefit']; 
            // array_oy_benefit = array_oy_benefit.filter(function (s) {
            //     return s && s.trim(); // 鍘绘帀绌哄€�
            // }); //鍏ㄧ┖浣滃搧锛屼絾鏄嵈瀹氫箟浜唊ey鐨勬儏鍐�
            if(array_oy_benefit[0]==''){
                array_oy_benefit[0]='鎴戜細鎶婂叏閮ㄥ伐璧勯兘缁欎綘';
            }
            if(array_oy_benefit[1]==''){
                array_oy_benefit[1]='姣忓ぉ鍋氬ソ鍚冪殑缁欎綘';
            }
            if(array_oy_benefit[2]==''){
                array_oy_benefit[2]='浣犵潯涓嶇潃鏃剁粰浣犺鏁呬簨';
            }
            if(array_oy_benefit[3]==''){
                array_oy_benefit[3]='缁欎綘鑷敱鍘诲仛鍠滄鐨勪簨鎯�';
            }            
        }else{
            array_oy_benefit=['鎴戜細鎶婂叏閮ㄥ伐璧勯兘缁欎綘','姣忓ぉ鍋氬ソ鍚冪殑缁欎綘','浣犵潯涓嶇潃鏃剁粰浣犺鏁呬簨','缁欎綘鑷敱鍘诲仛鍠滄鐨勪簨鎯�'];
        }
        console.log(array_oy_benefit); 
        var index_text_oy=0; 

        var count_text_oy=array_oy_benefit.length;
        console.log('涓€鍏辨湁'+count_text_oy+'鏉′欢');
        function oy_show_benefit(){
            var oy_text_height=$(".div_oy_text").height();
            if(index_text_oy<count_text_oy){  
                console.log('now the index_benefit_oy is->'+index_text_oy);                
                console.log('now the benefit_oy is->'+array_oy_benefit[index_text_oy]);
                $(".li_oy_benefit").eq(index_text_oy).html(array_oy_benefit[index_text_oy]).show();
                if($(document).height()-oy_text_height<520){ //闅忕潃鏂囧瓧鐨勫澶氾紝瀹炴椂璋冩暣楂樺害
                    $("#div_onlyyou").css({"height":$(document).height()+160+"px"});
                    $("#div_oy_inner").css({"height":$(document).height()+"px"});
                    console.log('update the document height +120');
                } 
                index_text_oy++;
            } else{
                oy_show_note();
            }
        }

        function oy_show_note(){
            $("#div_oy_note").show(); 
        }

        function oy_hide_note(){
            $("#div_oy_note").hide(); 
        }

        function oy_go_next(){  
            $("#div_oy_yes").show();
            setTimeout(function(){                
                $('#div_onlyyou').fadeOut();
                init_theme(); 
            },2000);
            setTimeout(function(){ 
                $('#div_onlyyou').remove();
            },3000);
        }



    function random_img_as(){  //鑾峰彇闅忔満鐨勬ā鏉垮浘鐗�
        // console.log('random_img_as'); 
        var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //闅忔満鍙栧€� 
        var random_img=array_as_pics_s[random_num];
        return random_img;
    } 