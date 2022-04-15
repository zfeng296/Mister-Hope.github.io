"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6332],{36416:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<p>在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。</p><p>由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。</p><p>但是办法还是有的。我们先回顾 Student 构造函数:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>以及 Student 的原型链:</p><p><img src="data:image/png;base64,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" alt="js-proto"></p><p>现在，我们要基于 <code>Student</code> 扩展出 <code>PrimaryStudent</code>，可以先定义出 <code>PrimaryStudent</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 调用Student构造函数，绑定this变量:</span>\n  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但是，调用了 <code>Student</code> 构造函数不等于继承了 <code>Student</code>，<code>PrimaryStudent</code> 创建的对象的原型是:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Object.prototype ----&gt; null\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>必须想办法把原型链修改为:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new PrimaryStudent() ----&gt; PrimaryStudent.prototype ----&gt; Student.prototype ----&gt; Object.prototype ----&gt; null\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这样，原型链对了，继承关系就对了。新的基于 <code>PrimaryStudent</code> 创建的对象不但能调用 <code>PrimaryStudent.prototype</code> 定义的方法，也可以调用 <code>Student.prototype</code> 定义的方法。</p><p>如果您想用最简单粗暴的方法这么干:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>是不行的! 如果这样的话，<code>PrimaryStudent</code> 和 <code>Student</code> 共享一个原型对象，那还要定义 <code>PrimaryStudent</code> 干啥?</p><p>我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向 <code>Student.prototype</code>。为了实现这一点，参考发明 JSON 的道格拉斯的代码，中间对象可以用一个空函数 <code>F</code> 来实现:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// PrimaryStudent构造函数:</span>\n<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 空函数F:</span>\n<span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">// 把F的原型指向Student.prototype:</span>\n<span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>\n\n<span class="token comment">// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:</span>\n<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:</span>\n<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> PrimaryStudent<span class="token punctuation">;</span>\n\n<span class="token comment">// 继续在PrimaryStudent原型(就是new F()对象)上定义方法:</span>\n<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建xiaoming:</span>\n<span class="token keyword">const</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">grade</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nxiaoming<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;小明&#39;</span>\nxiaoming<span class="token punctuation">.</span>grade<span class="token punctuation">;</span> <span class="token comment">// 2</span>\n\n<span class="token comment">// 验证原型:</span>\nxiaoming<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>\nxiaoming<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token comment">// 验证继承关系:</span>\nxiaoming <span class="token keyword">instanceof</span> <span class="token class-name">PrimaryStudent</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nxiaoming <span class="token keyword">instanceof</span> <span class="token class-name">Student</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>用一张图来表示新的原型链:</p><p><img src="data:image/png;base64,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" alt="js-proto-extend"></p><p>注意，函数 <code>F</code> 仅用于桥接，我们仅创建了一个 <code>new F()</code> 实例，而且，没有改变原有的 <code>Student</code> 定义的原型链。</p><p>如果把继承这个动作用一个 <code>inherits()</code> 函数封装起来，还可以隐藏 <code>F</code> 的定义，并简化代码:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">Child<span class="token punctuation">,</span> Parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>\n  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Child<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这个 <code>inherits()</code> 函数可以复用:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> props<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token string">&quot;Unnamed&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">PrimaryStudent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">Student</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> props<span class="token punctuation">.</span>grade <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 实现原型继承链:</span>\n<span class="token function">inherits</span><span class="token punctuation">(</span>PrimaryStudent<span class="token punctuation">,</span> Student<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 绑定其他方法到PrimaryStudent原型:</span>\n<span class="token class-name">PrimaryStudent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getGrade</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="原型继承小结" tabindex="-1"><a class="header-anchor" href="#原型继承小结" aria-hidden="true">#</a> 原型继承小结</h2><p>JavaScript 的原型继承实现方式就是:</p><ol><li><p>定义新的构造函数，并在内部用 <code>call()</code> 调用希望“继承”的构造函数，并绑定 <code>this</code>；</p></li><li><p>借助中间函数 <code>F</code> 实现原型链继承，最好通过封装的 <code>inherits</code> 函数完成；</p></li><li><p>继续在新的构造函数的原型上定义新方法。</p></li></ol>',28),t={},e=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])},83744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,p]of s)a[n]=p;return a}},87891:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-280a6107",path:"/code/language/js/object/extend.html",title:"原型继承",lang:"zh-CN",frontmatter:{title:"原型继承",icon:"extend",date:"2019-10-10T00:00:00.000Z",category:["JavaScript"],summary:"在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。\n由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/js/object/extend.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"原型继承"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:published_time",content:"2019-10-10T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>在传统的基于 Class 的语言如 Java、C++ 中，继承的本质是扩展一个已有的 Class，并生成新的 Subclass。</p>\n<p>由于这类语言严格区分类和实例，继承实际上是类型的扩展。但是，JavaScript 由于采用原型继承，我们无法直接扩展一个 Class，因为根本不存在 Class 这种类型。</p>\n",headers:[{level:2,title:"原型继承小结",slug:"原型继承小结",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:5}]},readingTime:{minutes:2.61,words:784},filePathRelative:"code/language/js/object/extend.md"}}}]);