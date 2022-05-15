"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[66707],{46342:(n,s,a)=>{a.r(s),a.d(s,{default:()=>c});var e=a(34086);const o=(0,e.uE)('<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code>int</code> 和 <code>Integer</code> 的关系。</p><p><code>number</code>、<code>boolean</code> 和 <code>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code>string</code> 类型和它的包装类型。包装对象用 <code>new</code> 创建:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123,生成了新的包装类型</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true,生成了新的包装类型</span>\n<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;str&#39;,生成了新的包装类型</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),t=(0,e.uE)('<p>虽然包装对象看上去和原来的值一模一样，显示出来也是一模一样，但他们的类型已经变为 <code>object</code> 了! 所以，包装对象和原始值用 <code>===</code> 比较会返回 <code>false</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>\n<span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>\n<span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;object&#39;</span>\n<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;str&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;str&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以不要使用包装对象! 尤其是针对 <code>string</code> 类型!!!</p><p>如果我们在使用 <code>Number</code>、<code>Boolean</code> 和 <code>String</code> 时，没有写 new 会发生什么情况?</p><p>此时，<code>Number()</code>、<code>Boolean()</code> 和 <code>String()</code> 被当做普通函数，把任何类型的数据转换为 <code>number</code>、<code>boolean</code> 和 <code>string</code> 类型(注意不是其包装类型):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123，相当于parseInt()或parseFloat()</span>\n<span class="token keyword">typeof</span> n<span class="token punctuation">;</span> <span class="token comment">// &#39;number&#39;</span>\n\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token keyword">typeof</span> b<span class="token punctuation">;</span> <span class="token comment">// &#39;boolean&#39;</span>\n\n<span class="token keyword">const</span> b2 <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true! &#39;false&#39;字符串转换结果为true!因为它是非空字符串!</span>\n<span class="token keyword">const</span> b3 <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n\n<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">123.45</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123.45&#39;</span>\n<span class="token keyword">typeof</span> s<span class="token punctuation">;</span> <span class="token comment">// &#39;string&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结:</p><ul><li><p>不要使用 <code>new Number()</code>、<code>new Boolean()</code>、<code>new String()</code> 创建包装对象；</p></li><li><p>用 <code>parseInt()</code> 或 <code>parseFloat()</code> 来转换任意类型到 <code>number</code>；</p></li><li><p>用 <code>String()</code> 来转换任意类型到 <code>string</code>，或者直接调用某个对象的 <code>toString()</code> 方法；</p></li><li><p>通常不必把任意类型转换为 <code>boolean</code> 再判断，因为可以直接写 <code>if (myVar) {...}</code>；</p></li><li><p><code>typeof</code> 操作符可以判断出 <code>number</code>、<code>boolean</code>、<code>string</code>、<code>function</code> 和 <code>undefined</code>；</p></li><li><p>判断 <code>Array</code> 要使用 <code>Array.isArray(arr)</code>；</p></li><li><p>判断 <code>null</code> 请使用 <code>myVar === null</code>；</p></li><li><p>判断某个全局变量是否存在用 <code>typeof window.myVar === &#39;undefined&#39;</code>；</p></li><li><p>函数内部判断某个变量是否存在用 <code>typeof myVar === &#39;undefined&#39;</code>。</p></li><li><p><code>null</code> 和 <code>undefined</code> 没有 <code>toString()</code> 方法，<code>number</code> 对象调用 <code>toString()</code> 报 <code>SyntaxError</code>。虽然 <code>null</code> 还伪装成了 <code>object</code> 类型。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">123.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError</span>\n<span class="token comment">// 遇到这种情况，要特殊处理一下:</span>\n\n<span class="token number">123.</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123&#39;, 注意是两个点!</span>\n<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;123&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>',8),p={},c=(0,a(78732).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e.kq)(" more "),t],64)}]])},78732:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},4991:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5d8cafd7",path:"/code/language/js/object/wrap.html",title:"包装对象",lang:"zh-CN",frontmatter:{title:"包装对象",icon:"wrap",date:"2019-10-11T00:00:00.000Z",category:["JavaScript"],summary:"除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 int 和 Integer 的关系。\nnumber、boolean 和 string 都有包装对象。没错，在 JavaScript 中，字符串也区分 string 类型和它的包装类型。包装对象用 new 创建:\nconst n = new Number(123); // 123,生成了新的包装类型\nconst b = new Boolean(true); // true,生成了新的包装类型\nconst s = new String(\"str\"); // 'str',生成了新的包装类型\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/object/wrap.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"包装对象"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-10-11T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:'<p>除了类型外，JavaScript 还提供了包装对象，熟悉 Java 就会了解 <code v-pre>int</code> 和 <code v-pre>Integer</code> 的关系。</p>\n<p><code v-pre>number</code>、<code v-pre>boolean</code> 和 <code v-pre>string</code> 都有包装对象。没错，在 JavaScript 中，字符串也区分 <code v-pre>string</code> 类型和它的包装类型。包装对象用 <code v-pre>new</code> 创建:</p>\n<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123,生成了新的包装类型</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true,生成了新的包装类型</span>\n<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"str"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'str\',生成了新的包装类型</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',headers:[],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:1.81,words:543},filePathRelative:"code/language/js/object/wrap.md"}}}]);