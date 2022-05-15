"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[58333],{92009:(n,s,a)=>{a.r(s),a.d(s,{default:()=>i});var e=a(34086);const t=(0,e._)("p",null,"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。",-1),p=(0,e._)("p",null,[(0,e.Uk)("比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 "),(0,e._)("code",null,"if"),(0,e.Uk)(" 语句实现:")],-1),o=(0,e.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>\n<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 Python 的缩进规则，如果 <code>if</code> 语句判断是 <code>True</code>，就把缩进的两行 <code>print</code> 语句执行了，否则，什么也不做。</p><p>也可以给 <code>if</code> 添加一个 <code>else</code> 语句，意思是，如果 <code>if</code> 判断是 <code>False</code>，不要执行 <code>if</code> 的内容，去把 <code>else</code> 执行了:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;your age is&#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要少写了冒号 <code>:</code>。</p><p>当然上面的判断是很粗略的，完全可以用 <code>elif</code> 做更细致的判断:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>elif</code> 是 <code>else if</code> 的缩写，完全可以有多个 <code>elif</code>，所以 <code>if</code> 语句的完整形式就是:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>条件判断<span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>执行<span class="token number">1</span><span class="token operator">&gt;</span>\n<span class="token keyword">elif</span> <span class="token operator">&lt;</span>条件判断<span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>执行<span class="token number">2</span><span class="token operator">&gt;</span>\n<span class="token keyword">elif</span> <span class="token operator">&lt;</span>条件判断<span class="token number">3</span><span class="token operator">&gt;</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>执行<span class="token number">3</span><span class="token operator">&gt;</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token operator">&lt;</span>执行<span class="token number">4</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 语句执行有个特点，它是从上往下判断，如果在某个判断上是 <code>True</code>，把该判断对应的语句执行后，就忽略掉剩下的 <code>elif</code> 和 <code>else</code>，所以，请测试并解释为什么下面的程序打印的是 <code>teenager</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">20</span>\n<span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;teenager&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">elif</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;adult&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;kid&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>if</code> 判断条件还可以简写，比如写:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> x<span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;True&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只要 <code>x</code> 是非零数值、非空字符串、非空 list 等，就判断为 <code>True</code>，否则为 <code>False</code>。</p><h2 id="再议-input" tabindex="-1"><a class="header-anchor" href="#再议-input" aria-hidden="true">#</a> 再议 input</h2><p>最后看一个有问题的条件判断。很多同学会用 <code>input()</code> 读取用户的输入，这样可以自己输入，程序运行得更有意思:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>birth <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00前&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00后&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 1982，结果报错:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nTypeError: unorderable types: str<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 <code>input()</code> 返回的数据类型是 <code>str</code>，<code>str</code> 不能直接和整数比较，必须先把 <code>str</code> 转换成整数。Python 提供了 <code>int()</code> 函数来完成这件事情:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;birth: &#39;</span><span class="token punctuation">)</span>\nbirth <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>\n<span class="token keyword">if</span> birth <span class="token operator">&lt;</span> <span class="token number">2000</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00前&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;00后&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行，就可以得到正确地结果。但是，如果输入 <code>abc</code> 呢? 又会得到一个错误信息:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:\n  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span>, line <span class="token number">1</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>\nValueError: invalid literal <span class="token keyword">for</span> int<span class="token punctuation">(</span><span class="token punctuation">)</span> with base <span class="token number">10</span>: <span class="token string">&#39;abc&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来 <code>int()</code> 函数发现一个字符串并不是合法的数字时就会报错，程序就退出了。</p><p>如何检查并捕获程序运行期的错误呢? 后面的错误和调试会讲到。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>条件判断可以让计算机自己做选择，Python 的 <code>if...elif...else</code> 很灵活。</p><p>条件判断从上向下匹配，当满足条件时执行对应的块内语句，后续的 <code>elif</code> 和 <code>else</code> 都不再执行。</p>',28),c={},i=(0,a(78732).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,(0,e.kq)(" more "),o],64)}]])},78732:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},2089:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-83da8d94",path:"/code/language/python/guide/condition.html",title:"条件判断",lang:"zh-CN",frontmatter:{title:"条件判断",icon:"condition",author:"廖雪峰",date:"2020-05-24T00:00:00.000Z",category:["Python"],summary:"计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。\n比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 if 语句实现:\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/guide/condition.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"条件判断"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:published_time",content:"2020-05-24T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"<p>计算机之所以能做很多自动化的任务，因为它可以自己做条件判断。</p>\n<p>比如，输入用户年龄，根据年龄打印不同的内容，在 Python 程序中，用 <code v-pre>if</code> 语句实现:</p>\n",headers:[{level:2,title:"再议 input",slug:"再议-input",children:[]},{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1591204114e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3},{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.43,words:730},filePathRelative:"code/language/python/guide/condition.md"}}}]);