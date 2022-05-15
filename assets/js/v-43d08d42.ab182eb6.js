"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65111],{96501:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var e=s(34086);const t={class:"custom-container tip"},o=(0,e._)("p",{class:"custom-container-title"},"提示",-1),p=(0,e.Uk)("此教程与快速上手章节中的 "),c=(0,e.Uk)("布尔值介绍"),l=(0,e.Uk)(" 完全相同。"),i=(0,e.uE)('<p>布尔值代表“真”和“假”两个状态。“真”用关键字 <code>true</code> 表示，“假”用关键字 <code>false</code> 表示。布尔值只有这两个值。</p><p>下列运算符会返回布尔值:</p><ul><li>前置逻辑运算符: <code>!</code> (Not)</li><li>相等运算符: <code>===</code>，<code>!==</code>，<code>==</code>，<code>!=</code></li><li>比较运算符: <code>&gt;</code>，<code>&gt;=</code>，<code>&lt;</code>，<code>&lt;=</code></li></ul><p>如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 <code>false</code>，其他值都视为 <code>true</code>。</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>NaN</code></li><li><code>&quot;&quot;</code> 或 <code>&#39;&#39;</code>(空字符串)</li></ul><p>布尔值往往用于程序流程的控制，请看一个例子。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 没有任何输出</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>if</code> 命令后面的判断条件，预期应该是一个布尔值，所以 JavaScript 自动将空字符串，转为布尔值 <code>false</code>，导致程序不会进入代码块，所以没有任何输出。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>注意，空数组(<code>[]</code>)和空对象(<code>{}</code>)对应的布尔值，都是 <code>true</code>。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// true</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2><p>当我们对 <code>Number</code> 做比较时，可以通过比较运算符得到一个布尔值:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token number">5</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token number">7</span> <span class="token operator">==</span> <span class="token number">7</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，JavaScript 允许对任意数据类型做比较:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token boolean">false</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要特别注意相等运算符 <code>==</code>。JavaScript 在设计时，有两种比较运算符:</p><ul><li><p>第一种是 <code>==</code> 比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；</p></li><li><p>第二种是 <code>===</code> 比较，它不会自动转换数据类型，如果数据类型不一致，返回 <code>false</code>，如果一致，再比较。</p></li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>由于 JavaScript 这个设计缺陷，不要使用 <code>==</code> 比较，始终坚持使用 <code>===</code> 比较。</p></div><p>另一个例外是 <code>NaN</code> 这个特殊的 <code>Number</code> 与所有其他值都不相等，包括它自己:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>唯一能判断 <code>NaN</code> 的方法是通过 <code>isNaN()</code> 函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后要注意浮点数的相等比较:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这不是 JavaScript 的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0000001</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符" aria-hidden="true">#</a> 布尔运算符</h2><h3 id="与运算符" tabindex="-1"><a class="header-anchor" href="#与运算符" aria-hidden="true">#</a> 与运算符 <code>&amp;&amp;</code></h3><p><code>&amp;&amp;</code> 运算是与运算，从左至右运行时，检测到有任一表达式为 <code>false</code> 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。</p><p>也就是所只有所有表达式都为“真”时， <code>&amp;&amp;</code> 才会输出真值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为true</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为false</span>\n<span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个&amp;&amp;语句计算结果为false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="或运算符" tabindex="-1"><a class="header-anchor" href="#或运算符" aria-hidden="true">#</a> 或运算符 <code>||</code></h3><p><code>||</code> 运算是或运算，从左至右运行时，检测到有任一表达式为 <code>true</code> 时，即停止执行输出该表达式的值，否则输出最后一个表达式的值。</p><p>也就是所只有所有表达式都为“假”时， <code>||</code> 才会输出假值。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为false</span>\n<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为true</span>\n<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 这个||语句计算结果为true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非运算符" tabindex="-1"><a class="header-anchor" href="#非运算符" aria-hidden="true">#</a> 非运算符 <code>!</code></h3><p><code>!</code> 运算是非运算，它是一个单目运算符，把 <code>true</code> 变成 <code>false</code>，<code>false</code> 变成 <code>true</code>:</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>!</code> 会等待其后的表达式运算完毕，之后将其转换为 Boolean 后给出一个相反的值。</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 结果为false</span>\n<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 结果为true</span>\n<span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果为true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>布尔值经常用在条件判断中，比如:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;adult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">else</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;teenager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h3>',41),d=(0,e.Uk)("详见 "),u=(0,e.Uk)("if / 三元运算符"),r=(0,e.Uk)(" 章节"),m={},k=(0,s(78732).Z)(m,[["render",function(n,a){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",t,[o,(0,e._)("p",null,[p,(0,e.Wm)(s,{to:"/code/language/js/guide/boolean.html"},{default:(0,e.w5)((()=>[c])),_:1}),l])]),(0,e.kq)(" more "),i,(0,e._)("p",null,[d,(0,e.Wm)(s,{to:"/code/language/js/guide/condition.html#%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6"},{default:(0,e.w5)((()=>[u])),_:1}),r])],64)}]])},78732:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},6279:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-43d08d42",path:"/code/language/js/types/boolean.html",title:"布尔值",lang:"zh-CN",frontmatter:{title:"布尔值",icon:"boolean",date:"2019-09-21T00:00:00.000Z",category:["JavaScript"],summary:"提示\n此教程与快速上手章节中的 布尔值介绍 完全相同。\n\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/types/boolean.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"布尔值"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-12T05:50:30.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-09-21T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-12T05:50:30.000Z"}]]},excerpt:'<div class="custom-container tip"><p class="custom-container-title">提示</p>\n<p>此教程与快速上手章节中的 <RouterLink to="/code/language/js/guide/boolean.html">布尔值介绍</RouterLink> 完全相同。</p>\n</div>\n',headers:[{level:2,title:"比较运算符",slug:"比较运算符",children:[]},{level:2,title:"布尔运算符",slug:"布尔运算符",children:[{level:3,title:"与运算符 &&",slug:"与运算符",children:[]},{level:3,title:"或运算符 ||",slug:"或运算符",children:[]},{level:3,title:"非运算符 !",slug:"非运算符",children:[]},{level:3,title:"三元运算符",slug:"三元运算符",children:[]}]}],git:{createdTime:1591204114e3,updatedTime:164464503e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7}]},readingTime:{minutes:3.22,words:965},filePathRelative:"code/language/js/types/boolean.md"}}}]);