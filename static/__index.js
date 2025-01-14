import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v , manage_mediaQuery} from './sydneyLib/sydneyDom.js';

import './_body_p1.js';
// import './_body_p2.js';
import './p2_rich.js'
import './_body_p3.js';
import './_body_p4.js';
import './_body_p5.js';
import "./roadMap.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            background:'linear-gradient(to bottom , #3bf6b2d1 , #2e9b96d9)',
            // backgroundImage:'url(./assets/mainBg.gif)',
            backgroundAttachment: 'fixed',
            overflowY:'scroll',
            position:'relative',
            // fontFamily:'"Aladin", system-ui',
            // fontFamily:'Mantis Rumble_PersonalUseOnly',
            fontFamily:'header',
            // wordSpacing:'5px',
            // fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#fff'
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            padding:'15px 20px',
            columnGap:'30px',
            position:'sticky',
            top:'0',
            zIndex:'999',
            background:'#44f9b7ec',
            alignItems:'center',
            justifyContent:'space-around',
            minHeight:'70px'
            // borderBottom:'5px solid #f0472f'
        }
    },
    {
        nameTag:"txt_shade1",
        style:{
            color:"#fff",
            textShadow:"0px 0px 2px #171717",
            lineHeight:"20px"
        }
    },
    {
        nameTag:"txt_shade2",
        style:{
            color:"#fff",
            textShadow:"3px 3px 1px #171717",
        }
    },
    {
        nameTag:"txt_shade3",
        style:{
            color:"#fff",
            textShadow:"2px 2px 1px #171717"
        }
    }
])

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'35px',
            minWidth:'35px',
            maxHeight:"35px",
            maxWidth:"35px",
            cursor:'pointer',
            borderRadius:'50%',
            
        }
    }
)

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container()
        },
        [
            __SYD.navBar(),
            __SYD._p1(),
            // __SYD._p2(),
            __SYD._p2(),
            __SYD._p3(),
            __SYD.roadMapPage(),
            __SYD._p5(),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;padding:50px;background:transparent;display:flex;align-items:center;flex-direction:column;'+__sC['txt_shade3']()
                },
                [
                    __c('p',{style:'font-size: .9rem;font-family:sunrise;text-align:center;font-weight:900;color:#fff;width:100vw;word-spacing:12px;'},[
                        `© ${new Date().getFullYear()} All Right Reserved by $RICH`
                    ])
                ]
            )
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.navBar = () =>{
    return __c(
        'div',
        {
            style:__sC.navBar({
                method:'add',
                style:{
                    height:__p(['navBar','_h'],'fit-content'),
                    padding:`15px ${__p(['navBar','padd'],'20px')}`,
                    justifyContent:`${__p(['navBar','padd'],'20px') === '20px' ? 'space-around' : 'space-between'}`,
                    // backgroundImage:`url(./assets/nav_bg.png)`,
                    // backgroundPosition:'100% 100%'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['navBar','l_size'],'50px')};min-width:${__p(['navBar','l_size'],'50px')};border-radius:unset;background-image:url('./assets/logo.jpeg');border-radius:50%;border:3px solid #3a22c0;background-color:transparent;${__p(['navBar','__nav_d'],'flex') === 'flex' ? '' : 'position:absolute;left:5px;'};`,
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                'div',
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:center;column-gap:50px;padding:5px;` + __sC['txt_shade1'](),
                },
                [
                    __SYD.nav_b_text('About','_p3'),
                    __SYD.nav_b_text('tokenomics','_p5'),
                    __SYD.nav_b_text('road map','roadMapPage'),
                ]
            ),
            __SYD.page1Socials(),
            __c(
                'div',
                {
                    style:`position:absolute;right:5px;height:35px;width:35px;background-image:url('./assets/menu.png');display:${__p(['navBar','__nav_d'],'flex') === 'flex' ? 'none' : 'block'};`,class:' menuRotate'
                },
                [

                ],
                {
                    events:{
                        onclick:() =>{
                            const mobileMenu = __g('mobileMenu');
                            // console.log(__v['mobileMenu'])
                            switch(mobileMenu._d)
                            {
                                case 'none':
                                    mobileMenu._d = 'flex';
                                    let _t1 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._op = '1';
                                        __u('mobileMenu',{type:'a',value:mobileMenu});
                                        clearTimeout(_t1)
                                    },100);
                                break;
                                case 'flex':
                                    mobileMenu._op = '0'
                                    let _t2 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._d = 'none';
                                        __u('mobileMenu',{type:'a',value:mobileMenu})
                                        clearTimeout(_t2)
                                    },300)
                            }
                            __u('mobileMenu',{type:'a',value:mobileMenu});
                            __v['mobileMenu'].focus();
                        }
                    },
                    genericStyle:['bg_fit']
                }
            ),
            __SYD.mobileMenu()
        ],
        {
            createState:{
                stateName:'navBar',
                state:{_h:'fit-content',l_size:'50px' , padd:'20px' , __nav_d:'flex'}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{_h:'fit-content',l_size:'40px' , padd:'5px'}},
                    {size:'<800px',prop:{__nav_d:'none'}}
                ],
                defState:{_h:'fit-content',l_size:'50px',__nav_d:'flex',padd:'20px'}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.nav_b_text = (text,click) =>{
    return __c(
        'p',
        {
            style:'font-size:14px;font-weight:700;cursor:pointer;text-transform:uppercase;font-family:sunrise;transition:all .3s linear;',
            // class:'btn_buy'
        },
        [
            text
        ],
        {
            events:{
                onclick:() =>{
                    switch(true)
                    {
                        case click === 'suntzutrx':
                            window.location = 'https://suntzutrx.xyz/'
                        break;
                        default:
                            __v[click].scrollIntoView();
                            __v['mobileMenu'].blur();
                            
                    }
                },
                onmouseover:(e) =>{
                    e.target.style.textShadow = '2px 2px 1px #171717'
                },
                onmouseout:(e) =>{
                    e.target.style.textShadow = '0px 0px 2px #171717'
                },
            }
        }
    )
}

__SYD.mobileMenu = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:fit-content;min-width:200px;padding:20px 10px;display:${__p(['mobileMenu','_d'],'none')};flex-direction:column;row-gap:20px;background:#44f9b7;border:1px solid #3a22c0;border-left:5px solid #3a22c0;border-bottom:5px solid #3a22c0;border-radius:15px;border-top-right-radius:unset;border-bottom-right-radius:unset;position:absolute;top:100%;right:0;opacity:${__p(['mobileMenu','_op'],'0')};transition:opacity .3s linear;box-shadow:-2px 2px 10px #333333b3;`,
            tabindex:'1',
            class:'mobile_menu'
        },
        [
            __SYD.nav_b_text('About','_p3'),
            __SYD.nav_b_text('Tokenomics','_p5'),
            __SYD.nav_b_text('Road Map','roadMapPage'),
            // __SYD.nav_b_text('How to Buy','_p4'),
            __SYD.nav_b_text('Buy Now','suntzutrx'),
            // __SYD.buyNowBtn()

        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{_d:'none',_op:'0'}
            },
            events:{
                onblur:() =>{
                    const mobileMenu = __g('mobileMenu');
                    console.log('hey')
                    mobileMenu._op = '0'
                    let _t2 = setTimeout(() =>{
                        const mobileMenu = __g('mobileMenu');
                        mobileMenu._d = 'none';
                        __u('mobileMenu',{type:'a',value:mobileMenu})
                        clearTimeout(_t2)
                    },300)
                    __u('mobileMenu',{type:'a',value:mobileMenu})
                }
            }
        }
    )
}


__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:`width:fit-content;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap;${__p(['navBar','__nav_d'],'flex') === 'flex' ? "" : "position:absolute;right:60px;"};`
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'mm'}),
            __SYD.page1SocialBtn({contentSrc:'tel'}),
            __SYD.page1SocialBtn({contentSrc:'x'})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
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

__m(__SYD.container())

addEventListener('DOMContentLoaded' , e =>{
    manage_mediaQuery(window.innerWidth)
})