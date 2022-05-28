"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8602],{24006:(s,e,n)=>{n.r(e),n.d(e,{default:()=>l});var a=n(95393);const t=[(0,a.uE)('<h1 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h1><p>重定向指的是将命令行输出写入指定位置。</p><ul><li><code>cmd1 | cmd2</code>: Pipe; take standard output of cmd1 as standard input to cmd2.</li><li><code>&gt; file</code>: Direct standard output to file.</li><li><code>&lt; file</code>: Take standard input from file.</li><li><code>&gt;&gt; file</code>: Direct standard output to file; append to file if it already exists.</li><li><code>&gt;| file</code>: Force standard output to file even if noclobber is set.</li><li><code>n&gt;| file</code>: Force output to file from file descriptor n even if noclobber is set.</li><li><code>&lt;&gt; file</code>: Use file as both standard input and standard output.</li><li><code>n&lt;&gt; file</code>: Use file as both input and output for file descriptor n.</li><li><code>&lt;&lt; label</code>: Here-document; see text.</li><li><code>n &gt; file</code>: Direct file descriptor n to file.</li><li><code>n &lt; file</code>: Take file descriptor n from file.</li><li><code>n &gt;&gt; file</code>: Direct file descriptor n to file; append to file if it already exists.</li><li><code>n&gt;&amp;</code>: Duplicate standard output to file descriptor n.</li><li><code>n&lt;&amp;</code>: Duplicate standard input from file descriptor n.</li><li><code>n&gt;&amp;m</code>: File descriptor  n is made to be a copy of the output file descriptor.</li><li><code>n&lt;&amp;m</code>: File descriptor  n is made to be a copy of the input file descriptor.</li><li><code>&amp;&gt;file</code>: Directs standard output and standard error to file.</li><li><code>&lt;&amp;-</code>: Close the standard input.</li><li><code>&gt;&amp;-</code>: Close the standard output.</li><li><code>n&gt;&amp;-</code>: Close the output from file descriptor  n.</li><li><code>n&lt;&amp;-</code>: Close the input from file descriptor  n.</li><li><code>n&gt;&amp;word</code>: If  n is not specified, the standard output (file descriptor 1) is used. If the digits in word do not specify a file descriptor open for output, a redirection error occurs. As a special case, if n is omitted, and word does not expand to one or more digits, the standard output and standard error are redirected as described previously.</li><li><code>n&lt;&amp;word</code>: If word expands to one or more digits, the file descriptor denoted by  n is made to be a copy of that file descriptor. If the digits in word do not specify a file descriptor open for input, a redirection error occurs. If word evaluates to -, file descriptor n is closed. If n is not specified, the standard input (file descriptor 0) is used.</li><li><code>n&gt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor  n, or the standard output (file descriptor 1) if n is not specified.</li><li><code>n&lt;&amp;digit-</code>: Moves the file descriptor digit to file descriptor  n, or the standard input (file descriptor 0) if n is not specified. digit is closed after being duplicated to n.</li></ul><p><code>&gt;</code> 用来将标准输出重定向到指定文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /usr/bin <span class="token operator">&gt;</span> ls-output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果重定向后的指定文件已经存在，就会被覆盖，不会有任何提示。</p><p>如果命令没有任何输出，那么重定向之后，得到的是一个长度为 <code>0</code> 的文件。因此，<code>&gt;</code> 具有创建新文件或改写现存文件、将其改为长度 <code>0</code> 的作用。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>&gt;&gt;</code> 用来将标准输出重定向追加到指定文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /usr/bin <span class="token operator">&gt;&gt;</span> ls-output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>2&gt;</code> 用来将标准错误重定向到指定文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /bin/usr <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> ls-error.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>标准输出和标准错误，可以重定向到同一个文件。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -l /bin/usr <span class="token operator">&gt;</span> ls-output.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>\n<span class="token comment"># 或者</span>\n$ <span class="token function">ls</span> -l /bin/usr <span class="token operator">&amp;&gt;</span> ls-output.txt\n\n<span class="token comment"># 追加到同一个文件</span>\n$ <span class="token function">ls</span> -l /bin/usr <span class="token operator">&amp;&gt;&gt;</span> ls-output.txt\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不希望输出错误信息，可以将它重定向到一个特殊文件<code>/dev/null</code>。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /bin/usr <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>|</code> 用于将一个命令的标准输出，重定向到另一个命令的标准输入。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> -l /usr/bin <span class="token operator">|</span> <span class="token function">less</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不要将<code>&gt;</code> 与 <code>|</code> 混淆。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token operator">&gt;</span> <span class="token function">less</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令会在当前目录，生成一个名为 <code>less</code> 的文本文件。</p><p>下面是标准错误重定向的一个例子。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function-name function">invalid_input</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Invalid input &#39;<span class="token environment constant">$REPLY</span>&#39;&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n<span class="token builtin class-name">read</span> -p <span class="token string">&quot;Enter a single item &gt; &quot;</span>\n<span class="token punctuation">[</span><span class="token punctuation">[</span> -z <span class="token environment constant">$REPLY</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> invalid_input\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tee" tabindex="-1"><a class="header-anchor" href="#tee" aria-hidden="true">#</a> tee</h2><p><code>tee</code> 命令用于同时将标准输出重定向到文件，以及另一个命令的标准输入。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> /usr/bin <span class="token operator">|</span> <span class="token function">tee</span> ls.txt <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">zip</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="命令替换" tabindex="-1"><a class="header-anchor" href="#命令替换" aria-hidden="true">#</a> 命令替换</h2><p>命令替换(command substitution)指的是将一个命令的输出，替换进入另一个命令。<code>$(command)</code> 表示命令替换，另一种写法是使用反引号。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span><span class="token variable">)</span></span>\n<span class="token comment"># 或者</span>\n$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">`</span><span class="token function">ls</span><span class="token variable">`</span></span>\n\n$ <span class="token function">ls</span> -l <span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">cp</span><span class="token variable">)</span></span>\n<span class="token comment"># 或者</span>\n$ <span class="token function">ls</span> -l <span class="token variable"><span class="token variable">`</span><span class="token function">which</span> <span class="token function">cp</span><span class="token variable">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="basename" tabindex="-1"><a class="header-anchor" href="#basename" aria-hidden="true">#</a> basename</h2><p><code>basename</code> 命令清除 一个路径名的开头部分，只留下一个文件的基本名称。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>\n<span class="token comment"># file_info: simple file information program</span>\n<span class="token assign-left variable">PROGNAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $0<span class="token variable">)</span></span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -e <span class="token variable">$1</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>File Type:&quot;</span>\n    <span class="token function">file</span> <span class="token variable">$1</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>File Status:&quot;</span>\n    <span class="token function">stat</span> <span class="token variable">$1</span>\n<span class="token keyword">else</span>\n    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$PROGNAME</span>: usage: <span class="token variable">$PROGNAME</span> file&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',32)],i={},l=(0,n(78732).Z)(i,[["render",function(s,e){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},78732:(s,e)=>{e.Z=(s,e)=>{const n=s.__vccOpts||s;for(const[s,a]of e)n[s]=a;return n}},12506:(s,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-04b088f8",path:"/linux/bash/archives/redirection.html",title:"重定向",lang:"zh-CN",frontmatter:{summary:"重定向 重定向指的是将命令行输出写入指定位置。 cmd1 | cmd2: Pipe; take standard output of cmd1 as standard input to cmd2.; > file: Direct standard output to file.; < file: Take standard input from file.;",head:[["meta",{property:"og:url",content:"https://mrhope.site/linux/bash/archives/redirection.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"重定向"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-27T06:58:54.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-27T06:58:54.000Z"}]]},excerpt:"",headers:[{level:2,title:"tee",slug:"tee",children:[]},{level:2,title:"命令替换",slug:"命令替换",children:[]},{level:2,title:"basename",slug:"basename",children:[]}],git:{createdTime:1591204114e3,updatedTime:1611730734e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:3.05,words:915},filePathRelative:"linux/bash/archives/redirection.md"}}}]);