(this["webpackJsonpgoit-react-hw-002-feedback"]=this["webpackJsonpgoit-react-hw-002-feedback"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},2:function(t,e,n){t.exports={li:"Statistics_li__1-Nu9",ul:"Statistics_ul__1rIj5"}},22:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),s=(n(16),n(17),n(18),n(5)),o=n(6),l=n(7),u=n(11),b=n(10),d=n(8),j=n.n(d),h=n(0);function v(t){var e=t.children;return Object(h.jsx)("section",{children:e})}var O=v;v.prototype={children:j.a.node.isRequired};var f=function(t){var e=t.title;return Object(h.jsx)("h1",{children:e})},x=n(9),p=n.n(x);var m=function(t){var e=t.options,n=t.onIncrement,c=Object.keys(e);return Object(h.jsx)("div",{className:p.a.buttons,children:c.map((function(t){return Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:t},t)}))})},g=n(2),k=n.n(g);var _=function(t){var e=t.good,n=t.neutral,c=t.bad,a=t.total,r=t.positivePercentage;return Object(h.jsxs)("ul",{className:k.a.ul,children:[Object(h.jsxs)("li",{className:k.a.li,children:[" good: ",e]}),Object(h.jsxs)("li",{className:k.a.li,children:[" neutral: ",n]}),Object(h.jsxs)("li",{className:k.a.li,children:[" bad: ",c]}),Object(h.jsxs)("li",{className:k.a.li,children:["total: ",a]}),Object(h.jsxs)("li",{className:k.a.li,children:["positivePercentage: ",r]})]})};var N=function(t){var e=t.message;return Object(h.jsx)("h2",{children:e})},F=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){t.setState((function(t){return Object(s.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(t,e,n){return t+e+n},t.countPositiveFeedbackPercentage=function(e,n,c){return Math.round(100*e/t.countTotalFeedback(e,n,c))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,c=t.bad,a=this.countTotalFeedback(e,n,c),r=this.countPositiveFeedbackPercentage(e,n,c);return Object(h.jsx)("div",{children:Object(h.jsxs)(O,{children:[Object(h.jsx)(f,{title:"Please leave feedback"}),Object(h.jsx)(m,{options:this.state,onIncrement:this.handleIncrement}),Object(h.jsx)(f,{title:"Statistics"}),this.countTotalFeedback(e,n,c)>0?Object(h.jsx)(_,{good:e,neutral:n,bad:c,total:a,positivePercentage:r}):Object(h.jsx)(N,{message:"No feedback given"})]})})}}]),n}(c.Component),P=F;var y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P,{})})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={buttons:"FeedbackButton_buttons__2vwft",button:"FeedbackButton_button__2I_xl"}}},[[22,1,2]]]);
//# sourceMappingURL=main.58cc5312.chunk.js.map