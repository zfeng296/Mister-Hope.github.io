"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[95382],{46016:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});var e=a(95393);const o=[(0,e.uE)('<p>由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f <span class="token operator">=</span> now\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数对象有一个 <code>__name__</code> 属性，可以拿到函数的名字:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">.</span>__name__\n<span class="token string">&#39;now&#39;</span>\n<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> f<span class="token punctuation">.</span>__name__\n<span class="token string">&#39;now&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，假设我们要增强 <code>now()</code> 函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 <code>now()</code> 函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器” (Decorator) 。</p><p>本质上，decorator 就是一个返回函数的高阶函数。所以，我们要定义一个能打印日志的 decorator，可以定义如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call %s():&#39;</span> <span class="token operator">%</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>\n<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> wrapper\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>观察上面的 <code>log</code>，因为它是一个 decorator，所以接受一个函数作为参数，并返回一个函数。我们要借助 Python 的 <code>@</code> 语法，把 decorator 置于函数的定义处:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span>\n<span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>now()</code> 函数，不仅会运行 <code>now()</code> 函数本身，还会在运行 <code>now()</code> 函数前打印一行日志:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">(</span><span class="token punctuation">)</span>\ncall now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 <code>@log</code> 放到 <code>now()</code> 函数的定义处，相当于执行了语句:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>now <span class="token operator">=</span> log<span class="token punctuation">(</span>now<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 <code>log()</code> 是一个 decorator，返回一个函数，所以，原来的 <code>now()</code> 函数仍然存在，只是现在同名的 <code>now</code> 变量指向了新的函数，于是调用 <code>now()</code> 将执行新函数，即在 <code>log()</code> 函数中返回的 <code>wrapper()</code> 函数。</p><p><code>wrapper()</code> 函数的参数定义是 <code>(*args, **kw)</code>，因此，<code>wrapper()</code> 函数可以接受任意参数的调用。在 <code>wrapper()</code> 函数内，首先打印日志，再紧接着调用原始函数。</p><p>如果 decorator 本身需要传入参数，那就需要编写一个返回 decorator 的高阶函数，写出来会更复杂。比如，要自定义 <code>log</code> 的文本:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s():&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> wrapper\n    <span class="token keyword">return</span> decorator\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 3 层嵌套的 decorator 用法如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span><span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;2021-3-15&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">(</span><span class="token punctuation">)</span>\nexecute now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n<span class="token number">2021</span><span class="token operator">-</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">15</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和两层嵌套的 decorator 相比，3 层嵌套的效果是这样的:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now <span class="token operator">=</span> log<span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们来剖析上面的语句，首先执行 <code>log(&#39;execute&#39;)</code>，返回的是 decorator 函数，再调用返回的函数，参数是 <code>now</code> 函数，返回值最终是 <code>wrapper</code> 函数。</p><p>以上两种 decorator 的定义都没有问题，但还差最后一步。因为我们讲了函数也是对象，它有 <code>__name__</code>等属性，但您去看经过 decorator 装饰之后的函数，它们的 <code>__name__</code> 已经从原来的 <code>&#39;now&#39;</code> 变成了 <code>&#39;wrapper&#39;</code>:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> now<span class="token punctuation">.</span>__name__\n<span class="token string">&#39;wrapper&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为返回的那个 <code>wrapper()</code> 函数名字就是 <code>&#39;wrapper&#39;</code>，所以，需要把原始函数的 <code>__name__</code> 等属性复制到 <code>wrapper()</code> 函数中，否则，有些依赖函数签名的代码执行就会出错。</p><p>不需要编写 <code>wrapper.__name__ = func.__name__</code> 这样的代码，Python 内置的 <code>functools.wraps</code> 就是干这个事的，所以，一个完整的 decorator 的写法如下:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> functools\n\n<span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>\n    <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;call %s():&#39;</span> <span class="token operator">%</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span>\n<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> wrapper\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者针对带参数的 decorator:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> functools\n\n<span class="token keyword">def</span> <span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">decorator</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token decorator annotation punctuation">@functools<span class="token punctuation">.</span>wraps</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span>\n        <span class="token keyword">def</span> <span class="token function">wrapper</span><span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span> <span class="token operator">**</span>kw<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s %s():&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>text<span class="token punctuation">,</span> func<span class="token punctuation">.</span>__name__<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">**</span>kw<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> wrapper\n    <span class="token keyword">return</span> decorator\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>import functools</code> 是导入 <code>functools</code> 模块。模块的概念稍候讲解。现在，只需记住在定义 <code>wrapper()</code> 的前面加上 <code>@functools.wraps(func)</code> 即可。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>在面向对象 (OOP) 的设计模式中，decorator 被称为装饰模式。OOP 的装饰模式需要通过继承和组合来实现，而 Python 除了能支持 OOP 的 decorator 外，直接从语法层次支持 decorator。Python 的 decorator 可以用函数实现，也可以用类实现。</p><p>decorator 可以增强函数的功能，定义起来虽然有点复杂，但使用起来非常灵活和方便。</p><p>请编写一个 decorator，能在函数调用的前后打印出 <code>&#39;begin call&#39;</code> 和 <code>&#39;end call&#39;</code> 的日志。</p><p>再思考一下能否写出一个 <code>@log</code> 的 decorator，使它既支持:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span>\n<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>又支持:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@log</span><span class="token punctuation">(</span><span class="token string">&#39;execute&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">pass</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',40)],p={},t=(0,a(78732).Z)(p,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)("div",null,o)}]])},78732:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},45432:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-e7b24e0e",path:"/code/language/python/functional-programming/decorator.html",title:"装饰器",lang:"zh-CN",frontmatter:{title:"装饰器",icon:"decorate",author:"廖雪峰",date:"2021-03-15T00:00:00.000Z",category:["Python"],summary:"由于函数也是一个对象，而且函数对象可以被赋值给变量，所以，通过变量也能调用该函数。 函数对象有一个 name 属性，可以拿到函数的名字: 现在，假设我们要增强 now() 函数的功能，比如，在函数调用前后自动打印日志，但又不希望修改 now() 函数的定义，这种在代码运行期间动态增加功能的方式，称之为“装饰器” (Decorator) 。 本质上，decor",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/python/functional-programming/decorator.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"装饰器"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:46:58.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:author",content:"廖雪峰"}],["meta",{property:"article:published_time",content:"2021-03-15T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:46:58.000Z"}]]},excerpt:"",headers:[{level:2,title:"小结",slug:"小结",children:[]}],git:{createdTime:1615823008e3,updatedTime:1644166018e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:3},{name:"Mister-Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:3.44,words:1032},filePathRelative:"code/language/python/functional-programming/decorator.md"}}}]);