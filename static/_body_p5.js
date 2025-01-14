import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"

__SYD._p5 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p5','__flex'],'row'),
                    justifyContent:'center',
                    padding:'20px 10px',
                    minHeight:'unset',
                    color:'#fff'
                    // transform:'unset'
                }
            }),
            id:'tokenomics'
        },
        [
            // __c(
            //     'div',
            //     {
            //         style:`min-height:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '50vh' : '300px'};min-width:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '40%' : '100%'};background-image:url("./assets/peck.gif");`
            //     },
            //     [
                    
            //     ],
            //     {
            //         genericStyle:['bg_cover'],
            //     }
            // ),
            __c(
                'div',
                {
                    style:'width:50%;max-width:500px;min-width:250px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:left;padding:20px;row-gap:10px;background:#44f9b7',
                    class:"tab_text"
                },
                [
                    __c('h1',{style:`font-weight:900;font-weight:100;font-size:${__p(['_p5','__font'],{1:'30px'})['1']};width:max-content;margin-bottom:25px;font-family:sunrise;`+__sC['txt_shade3']()},['Tokenomics']),
                    __SYD.about_text_tokenomics('Tac 0/0'),
                    __SYD.about_text_tokenomics('1B supply'),
                    __SYD.about_text_tokenomics('Lp burnt'),
                ]
            )
        ],
        {
            createState:{
                stateName:'_p5',
                state:{__size:'4.5rem',__flex:'row',__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column',__font:{1:'25px',2:'17px'}}}],
                defState:{__size:'4.5rem',__flex:'row',__font:{1:'30px',2:'20px'}}
            }
        }
    )
}

__SYD.about_text_tokenomics = (text) =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:100;width:max-content;padding:15px 20px;width:100%;text-align:center;',class:'btn_buy'},[
        text
    ])
}