import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style_largeIcons',
        style:{
            minHeight:'50px',
            minWidth:'50px',
            maxHeight:'50px',
            maxWidth:'50px',
            cursor:'pointer',
            borderRadius:'50%',
            
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'flex-start',
                    justifyContent:'space-around'
                }
            })  + __sC['txt_shade1']()
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background:unset;display:flex;justify-content:center;align-items:${__p(['_p2','_flex'],'row') === 'row' ? 'flex-start' : 'center'};flex-direction:column;row-gap:20px`
                },
                [
                    // __c('h2',{class:'rainbow__text',style:`text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'50px'})['2']}`},['INTRODUCING ...']),
                    __c('h1',{class:'',style:`font-family:header;font-size:${__p(['_p2','__font'],{1:'30px'})['1']};`+__sC['txt_shade2']()},['$RICH']),
                    // __c('h2',{class:'rainbow__text',style:`text-align:center;width:100%;font-size:${__p(['_p2','__font'],{2:'25px'})['2']}`},['Pekingese Beijing dog']),
                    __SYD.about_text_p2(),
                    __SYD.page1Socials_large_icons(),
                    __c(
                        'div',
                        {style:'display:flex;width:100%;row-gap:10px;align-items:center;text-align:left;height:100px;column-gap:20px'},
                        [
                            __c(
                                'p',
                                {
                                    style:'font-size:20px;width:max-content;min-width:fit-content;text-align:left'
                                },
                                [
                                    'C.A'
                                ]
                            ),
                            __c(
                                'div',
                                {
                                    style:'min-height:50px;min-width:50px;background-color:#3a22c0;cursor:pointer;background-size:50%;background-image:url("assets/copy.png")',
                                    class:'btn_copy'
                                },[],{genericStyle:['bg_fit']},
                                {
                                    events:{
                                        onclick:() =>{
                                            navigator.clipboard.writeText('0x1852B16e564f5413C45986D13442791B08C9D3B8')
                                            alert('contract address copied')
                                        }
                                    }
                                }
                            )
                        ]
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '80vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background-image:url("./assets/top.png");background-size:contain;`//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'30px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column',__font:{1:'25px',2:'17px'}}}],
                defState:{_flex:'row',__font:{1:'30px',2:'20px'}}
            }
        }
    )
}

__SYD.buyNowBtn = () =>{
    return __c('a',{href:'https://suntzutrx.xyz/',target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};align-items:center;justify-content:center;padding:15px 30px;color:#fff;text-decoration:none;margin-right:15px;`,class:'btn_buy'},['Buy Now'],{genericStyle:['bg_fit']})
}

__SYD.page1Socials_large_icons = () =>{
    return __c(
        'div',
        {
            style:'width:fit-content;padding:10px 0;display:flex;justify-content:space-around;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            __SYD.buyNowBtn(),
            __SYD.page1SocialBtn_large_icons({contentSrc:'sol'}),
            __SYD.page1SocialBtn_large_icons({contentSrc:'bin'}),
        ]
    )
}

__SYD.page1SocialBtn_large_icons = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style_largeIcons({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'btn_buy'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2 = () =>{
    return __c('p',{style:`font-size:${__p(['_p2','__font'],{2:'20px'})['2']};line-height:;text-align:left;font-weight:300;width:100%;max-width:400px;text-align:left;font-family:sunrise;word-spacing:6px;`},[
        __c('p',{style:"margin-bottom:5px;"},[
            `Rags to Riches `
        ]),
        `Welcome to the ` , __c('span',{style:'font-family:header;'+__sC['txt_shade3']()},[" $rich"]) , ` revolution.`,
    ])
}