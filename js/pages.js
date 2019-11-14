var animation_value=800;
        /*
        $('.sec').on('click',function(){
            var myCtn=$('#data_con .sec').index($(this));            
            var ctns=$('#data_con .sec').length;            
            if($(this).hasClass('fp_r')){//-往左翻 打開
                $(this).removeClass('fp_r').addClass('fp_l');
            }else if($(this).hasClass('fp_l')){//-往右翻 關閉
                $(this).removeClass('fp_l').addClass('fp_r');
            }
            var isF=$(this).hasClass('fp_l');
            var thiss=$(this);
            if(isF){
                $(this).css({"transform":"rotateY(-180deg)"});
            }else{
                $(this).css({"transform":"rotateY(0deg)"});
            }
            over_pre_page(myCtn,ctns,isF);            
            setTimeout(function(){                
                if(isF)thiss.children('.in_content').css('display','none');
                else{thiss.children('.in_content').css('display','block');}
            },animation_value/2);
        });
        */
        function go(nb){            
            $('#select_con .book_select').eq(nb).addClass('active').siblings('.book_select').removeClass('active');
            var ctns=$('#data_con .sec').length;
            var ctns_l=$('#data_con .sec.fp_l').length;            
            if(nb!=ctns_l){                
                    if(nb>ctns_l){//--往左翻到指定
                        var movenb=nb-ctns_l;     
                        if(movenb==1&&nb>0){//--往左只翻一頁
                            if(nb>1){over_pre_page_l(nb-1);}                        
                            $('#data_con .sec').eq(nb-1).removeClass('fp_r').addClass('fp_l');
                            $('#data_con .sec').eq(nb-1).css("transform", `rotateY(-180deg)`);
                            setTimeout(function(){
                                $('#data_con .sec').eq(nb-1).children('.in_content').css('display','none');
                            },animation_value/2);                                                                        
                        }else{//-往左翻大於1頁
                            //nb-movenb-1
                            // for(var i=0;i<movenb;i++){
                            //     var tt=100*(i+1);
                            //     var ss=ctns_l+i;
                            //     var val=-180-(movenb-1-i);
                            //     if(i==movenb)val=-180;                            
                            //     $('#data_con .sec').eq(ss).removeClass('fp_r').addClass('fp_l');
                            //     Run_l(ss,tt,val,true);
                            // }
                            for(var i=0;i<nb;i++){
                                if(i>ctns_l-1){//-要翻的                                    
                                    var tt=(i-ctns_l+1)*100
                                    var val=-180-(nb-i-1);
                                    $('#data_con .sec').eq(i).removeClass('fp_r').addClass('fp_l');
                                    Run_l(i,tt,val,true);
                                }else{//-已經翻過的 改Y直                                    
                                    var val=-180-(nb-i-1);
                                    $('#data_con .sec').eq(i).css("transform", `rotateY(${val}deg)`);
                                }                                
                            }
                        }
                                    
                    }
                    else if(nb<ctns_l){//--往右翻到指定                        
                        var movenb=ctns_l-nb;
                        if(movenb==1&&nb<ctns)over_pre_page_r(nb,ctns);
                        for(var i=0;i<movenb+1;i++){
                            var tt=100*(i+1);                            
                            var ss=ctns_l-i;
                            var val=0+movenb-(i+1);        
                            $('#data_con .sec').eq(ss).removeClass('fp_l').addClass('fp_r');
                            Run_l(ss,tt,val,false);                            
                        }
                    }
                
            }
            
        }
        function Run_l(nb,tt,val,way){
            setTimeout(function(){                
                $('#data_con .sec').eq(nb).css("transform", `rotateY(${val}deg)`);
                    setTimeout(function(){                
                        if(way)$('#data_con .sec').eq(nb).children('.in_content').css('display','none');
                        else{$('#data_con .sec').eq(nb).children('.in_content').css('display','block');}
                    },animation_value/2);
                },tt);
        }
        function Run_r(nb,tt,val){
            setTimeout(function(){                      
                $('#data_con .sec').eq(nb).css("transform", `rotateY(${val}deg)`);
                    setTimeout(function(){                
                        $('#data_con .sec').eq(nb).children('.in_content').css('display','none');                                    
                    },animation_value/2);
                },tt);
        }
        function over_pre_page(myCtn,ctns,isF){
            for(var i=0;i<ctns;i++){
                if(isF){//-往左打開
                    var val=-180-(myCtn-i);
                    if(i<myCtn)$('#data_con .sec').eq(i).css("transform", `rotateY(${val}deg)`);
                    if(myCtn!=ctns)$('#select_con .book_select').eq(myCtn+1).addClass('active').siblings('.book_select').removeClass('active');
                }else{
                    var val=0+(i-myCtn);
                    if(i>myCtn)$('#data_con .sec').eq(i).css("transform", `rotateY(${val}deg)`);
                    if(myCtn!=ctns)$('#select_con .book_select').eq(myCtn).addClass('active').siblings('.book_select').removeClass('active');
                }
            }
        }
        function over_pre_page_l(myCtn){
            for(var i=0;i<myCtn;i++){                
                var val=-180-(myCtn-i);
                $('#data_con .sec').eq(i).css("transform", `rotateY(${val}deg)`);                    
            }
        }
        function over_pre_page_r(myCtn,alls){
            for(var i=alls-1;i>myCtn;i--){                
                var val=0+(i-myCtn);
                $('#data_con .sec').eq(i).css("transform", `rotateY(${val}deg)`);                    
            }
        }