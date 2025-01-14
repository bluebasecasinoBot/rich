import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:"display:flex;flex-direction:column;align-items:center;row-gap:20px;" + __sC._body_style({method:'use' , style:['background' , 'height' , 'width' , 'minHeight' , 'padding' , 'paddingTop']}) + __sC['txt_shade1'](),
            id:'about'
        },
        [
            __c('h1',{style:`color:#fff;font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'30px')}`+__sC['txt_shade2']()},['ABOUT']),
            __c(
                "div",
                {
                    style:__sC._body_style([{
                        method:'add',style:{
                            height:'fit-content',
                            flexDirection:__p(['_p3','__flex'],'row'),
                            justifyContent:'flex-start',
                            padding:'20px 10px',
                            minHeight:'unset',
                            // flexDirection:'row',
                            // transform:'unset'
                        }
                    } , {method:'remove' , style:['height' , 'minHeight' , 'padding' , 'paddingTop' , 'background']}])
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3','__size'],'30px') === '30px' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'30px') === '30px' ? '40%' : '100%'};background-image:url("./assets/about.png");background-size:contain;border-radius:15px;`,
                        },
                        [
                            
                        ],
                        {
                            genericStyle:['bg_cover'],
                        }
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;'
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"padding:15px;background:transparent;background:#44f9b7",
                                    class:"tab_text"
                                },
                                [
                                    __SYD.about_text(),
                                    __SYD.about_text_2(),
                                ]
                            )
                            
                        ]
                    )
                ]
            ),
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'30px',__flex:'row',__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'25px',__flex:'column-reverse',__font:{1:'25px',2:'17px'}}}],
                defState:{__size:'30px',__flex:'row',__font:{1:'30px',2:'20px'}}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:`font-size:${__p(['_p3' , '__font'],{2:'20px'})['2']};line-height: unset;max-width:500px;text-align:left;font-weight:100;`},[
        ` From broke AF to ballin’ on Sol, the journey has been wild. Started with a laptop that barely opened and a wallet thinner than my self-esteem, but now I’m stacking `,__c('span',{style:'font-family:header;'+__sC['txt_shade3']()},[" $rich"]),` in my digital vault like a true entrepreneur. 💸
        It's not just about the grind`
    ])
}


__SYD.about_text_2 = () =>{
    return __c('p',{style:`font-size:${__p(['_p3' , '__font'],{2:'20px'})['2']};line-height: unset;max-width:500px;text-align:left;font-weight:100;margin-top:12px;`},[
        `it's about the perfect meme that turns pennies into SOL... and dreams into reality . 🚀`
    ])
}