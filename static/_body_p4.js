import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"



__SYD._p4 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    paddingLeft:'30px',
                    paddingRight:'30px',
                    background:'transparent',
                    padding:'20px 10px'
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{style:`font-weight:900;padding:10px 0;font-weight:100;font-size:${__p(['_p4','__size'],'4rem')}`},['How To Buy']),
            __SYD.buy_tabs(
                {content:`Download tor link and setup your wallet .Get tron through and exchange or bridge your usdt` ,title:`Create a Wallet`}
            ),
            __SYD.buy_tabs({
                content:`Have Tron in your wallet to switch to $JADE. If you don’t have any TRON, you can buy directly on your TRON wallet, transfer from another wallet, or buy on another exchange and send it to your wallet.`,title:`Get Some TRON`
            }),
            __SYD.buy_tabs({
                content:`Go to suntzutrx.xyz on the browser inside your TRON wallet app. Connect your wallet. Paste the $JADE token address into Suntzutrx, select JADE, and confirm. When TRON wallet prompts you for a wallet signature, sign.`,title:`Go to Suntzutrx`
            }),
            __SYD.buy_tabs({
                content:`switch TRON for $JADE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.`,title:`Switch TRON to $JADE`
            }),
        ],
        {
            createState:{
                stateName:'_p4',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = ''}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:1000px;height:fit-content;border-radius:30px;border:10px solid #7c170c;background:#7c170c;',
        },
        [
            __c('div',{style:'height:70px;width:100%;display:flex;background:#ffdebd;align-items:center;column-gap:20px;justify-content:flex-end;padding:5px 20px;margin-bottom:5px;',class:'tab_text'},[
                __c('span',{style:'height:40px;width:40px;background:#d03e27;border-radius:50%;box-shadow:2px -2px 0px 3px #7c170c inset,2px -2px 0px 4px #290804 inset;border:1px solid #290804;'}),
                __c('span',{style:'height:40px;width:40px;background:#d03e27;border-radius:50%;box-shadow:2px -2px 0px 3px #7c170c inset,2px -2px 0px 4px #290804 inset;border:1px solid #290804;'}),
            ]),
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['_p4','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:${__p(['_p4','__flex_child'],'row')};background:#ffdebd;`,
                    class:'tab_text'
                },
                [
                    __c('div',{style:'min-height:100px;min-width:100px;background-image:url("./assets/logo_min.png");'},[],{genericStyle:['bg_fit']}),
                    __c(
                        'div',
                        {
                            style:'width:100%'
                        },
                        [
                            __c('p',{style:'font-size:28px;text-align:left;color:rgba(66,9,5);text-transform:capitalize'},[title]),
                            __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:500;color:#333'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}
