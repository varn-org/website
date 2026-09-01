(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n){let r=document.createElement(e);return r.className=t,n!==void 0&&(r.textContent=n),r}var t=`https://github.com/varn-org/varn`,n=[{icon:`🌐`,name:`http`,blurb:`Web server and client, routing, middleware, WebSockets, SSE, static files`},{icon:`🔌`,name:`socket`,blurb:`TCP, TLS, UDP, and unix-domain connections`},{icon:`⏳`,name:`async`,blurb:`Background tasks, timers, promises, and combinators`},{icon:`📁`,name:`fs`,blurb:`Read, write, stream, stat, and list files`},{icon:`🔐`,name:`crypto`,blurb:`Hashing, HMAC, passwords, encryption, encoding, UUIDs, random`},{icon:`🧾`,name:`json`,blurb:`Encode and decode JSON with a full Lua mapping`},{icon:`🧬`,name:`xml`,blurb:`Encode and decode XML with a full Lua mapping`},{icon:`🗜️`,name:`zip`,blurb:`Create, extract, and list archives`},{icon:`🕒`,name:`datetime`,blurb:`Parse, format, and do calendar arithmetic on instants`},{icon:`⚙️`,name:`process`,blurb:`Run commands and read the environment and arguments`},{icon:`🧩`,name:`ffi`,blurb:`Call functions from native libraries`},{icon:`📝`,name:`log`,blurb:`Leveled, structured logging to the console or a file`}],r=[{icon:`🤖`,name:`ai`,blurb:`Text, images, and audio across OpenAI, Claude, Gemini, ElevenLabs, and OpenAI-compatible providers`},{icon:`⏱`,name:`scheduler`,blurb:`Durable background jobs, immediate, scheduled, or recurring, with retries and crash recovery`},{icon:`🗄️`,name:`vdo`,blurb:`PDO-style database access over SQLite, MySQL, and PostgreSQL`},{icon:`⚡`,name:`redis`,blurb:`Redis client over a single connection with auto-pipelining`},{icon:`🪣`,name:`pool`,blurb:`Async resource pooling for clients and connections`}],i=[{route:`HTTP plaintext`,varn:`131k`,node:`50k`,python:`48k`},{route:`HTTP json`,varn:`109k`,node:`49k`,python:`44k`},{route:`MySQL select`,varn:`13.5k`,node:`10.6k`,python:`10.7k`},{route:`Redis incr`,varn:`44.4k`,node:`35.0k`,python:`15.7k`}],a=`local http = require("http")

local server = http.createServer(function(req, res)
    res:json({ hello = req.query.name or "world" })
end)

server:listen(3000)`;function o(t,n,r){let i=e(`a`,`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${r?`bg-cyan-500 text-zinc-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 focus-visible:outline-cyan-300`:`border border-zinc-700 bg-zinc-900 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-zinc-400`}`,t);return i.href=n,n.startsWith(`http`)&&(i.target=`_blank`,i.rel=`noopener noreferrer`),i}function s(t){return e(`h2`,`text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90`,t)}function c(c){let l=e(`div`,`mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12 md:px-8 md:py-16`),u=e(`section`,`flex flex-col items-center gap-6 text-center`),d=document.createElement(`img`);d.src=`/logo-light.svg`,d.alt=`Varn`,d.className=`h-20 w-auto md:h-24`,u.appendChild(d),u.appendChild(e(`h1`,`max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl`,`Lua everywhere.`)),u.appendChild(e(`p`,`max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg`,`Write the whole application once in Lua and run that same code on a computer, a phone, or in the browser — on a fast C++ core that already carries the web layer, networking, background work, storage and crypto, so there is nothing to assemble.`));let f=e(`div`,`mt-2 flex flex-wrap items-center justify-center gap-3`);f.appendChild(o(`Open the playground`,`#/playground`,!0)),f.appendChild(o(`View on GitHub`,t,!1)),u.appendChild(f),l.appendChild(u);let p=e(`section`,`flex flex-col gap-4`);p.appendChild(s(`Quickstart`)),p.appendChild(e(`p`,`max-w-2xl text-sm leading-relaxed text-zinc-400`,`A working web server in a few lines — the same script runs everywhere.`));let m=e(`pre`,`overflow-auto rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 font-mono text-sm leading-relaxed text-cyan-50 shadow-xl shadow-black/40`);m.textContent=a,p.appendChild(m),l.appendChild(p);let h=e(`section`,`flex flex-col gap-4`);h.appendChild(s(`Batteries included`)),h.appendChild(e(`p`,`max-w-2xl text-sm leading-relaxed text-zinc-400`,`Every module is independent and used through require, so a script pulls in only what it needs.`));let g=e(`div`,`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`);for(let t of n){let n=e(`div`,`flex flex-col gap-1 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-zinc-700 hover:bg-zinc-900/70`),r=e(`div`,`flex items-center gap-2`);r.appendChild(e(`span`,`text-lg`,t.icon)),r.appendChild(e(`span`,`font-mono text-sm font-semibold text-cyan-300`,t.name)),n.appendChild(r),n.appendChild(e(`p`,`text-sm leading-relaxed text-zinc-400`,t.blurb)),g.appendChild(n)}h.appendChild(g),l.appendChild(h);let _=e(`section`,`flex flex-col gap-4`);_.appendChild(s(`Components`)),_.appendChild(e(`p`,`max-w-2xl text-sm leading-relaxed text-zinc-400`,`Higher-level libraries written in Lua on top of the core, loaded with require. These run server-side on the native runtime.`));let v=e(`div`,`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`);for(let t of r){let n=e(`div`,`flex flex-col gap-1 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition hover:border-zinc-700 hover:bg-zinc-900/70`),r=e(`div`,`flex items-center gap-2`);r.appendChild(e(`span`,`text-lg`,t.icon)),r.appendChild(e(`span`,`font-mono text-sm font-semibold text-cyan-300`,t.name)),n.appendChild(r),n.appendChild(e(`p`,`text-sm leading-relaxed text-zinc-400`,t.blurb)),v.appendChild(n)}_.appendChild(v),l.appendChild(_);let y=e(`section`,`flex flex-col gap-4`);y.appendChild(s(`Performance`)),y.appendChild(e(`p`,`max-w-2xl text-sm leading-relaxed text-zinc-400`,`Requests per second on one core (Linux), no framework on any side — against raw Node http and a raw ASGI app on uvicorn. Varn leads every route, database and cache included, with a fraction of the tail latency.`));let b=e(`div`,`overflow-hidden rounded-2xl border border-zinc-800/80`),x=e(`table`,`w-full text-left text-sm`),S=e(`thead`,`bg-zinc-900/60 text-zinc-400`),C=e(`tr`,``);for(let[t,n]of[`Scenario`,`Varn`,`Node`,`Python`].entries())C.appendChild(e(`th`,`px-4 py-3 font-medium ${t===0?``:`text-right`}`,n));S.appendChild(C),x.appendChild(S);let w=e(`tbody`,`divide-y divide-zinc-800/80`);for(let t of i){let n=e(`tr`,`text-zinc-300`);n.appendChild(e(`td`,`px-4 py-3`,t.route)),n.appendChild(e(`td`,`px-4 py-3 text-right font-semibold text-cyan-300`,t.varn)),n.appendChild(e(`td`,`px-4 py-3 text-right text-zinc-400`,t.node)),n.appendChild(e(`td`,`px-4 py-3 text-right text-zinc-400`,t.python)),w.appendChild(n)}x.appendChild(w),b.appendChild(x),y.appendChild(b),l.appendChild(y);let T=e(`section`,`flex flex-col items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 px-6 py-10 text-center`);T.appendChild(e(`h2`,`text-2xl font-semibold tracking-tight text-white`,`Try it right here`)),T.appendChild(e(`p`,`max-w-xl text-sm leading-relaxed text-zinc-400`,`The playground runs the real Varn engine compiled to WebAssembly, in your browser. Pick a module and run it.`));let E=e(`div`,`flex flex-wrap items-center justify-center gap-3`);E.appendChild(o(`Open the playground`,`#/playground`,!0)),E.appendChild(o(`View on GitHub`,t,!1)),T.appendChild(E),l.appendChild(T),c.appendChild(l)}var l=`local function fib(n)
  if n < 2 then
    return n
  end
  return fib(n - 1) + fib(n - 2)
end

print("fib(12) =", fib(12))

for i = 1, 4 do
  print(string.format("loop %d", i))
end
`,u=[{module:`Lua`,label:`Lua — fibonacci`,code:l},{module:`Lua`,label:`Lua — strings & patterns`,code:`local text = "varn: fast, small, embeddable"

-- split the sentence into words with a pattern
for word in text:gmatch("%a+") do
  print(word)
end

print("upper:", text:upper())
print("commas:", select(2, text:gsub(",", "")))
`},{module:`Lua`,label:`Lua — tables & iteration`,code:`local fruits = { "apple", "banana", "cherry" }

-- ordered iteration over an array
for index, name in ipairs(fruits) do
  print(index, name)
end

local counts = { apple = 3, banana = 5 }
counts.cherry = 1

-- keyed iteration over a map
for name, n in pairs(counts) do
  print(name, "=", n)
end
`},{module:`Lua`,label:`Lua — error handling`,code:`-- pcall turns a runtime error into a value you can inspect
local ok, err = pcall(function()
  error("something went wrong")
end)
print("ok:", ok)
print("err:", err)

local divided, result = pcall(function(a, b)
  return a / b
end, 10, 2)
print("divided:", divided, "result:", result)
`},{module:`Lua stdlib`,label:`string — format, find, gsub, bytes`,code:`-- the string library for formatting search substitution and bytes
local s = "Varn 1.0 fast and small"
print("format:", string.format("%s has %d chars", s, #s))
print("find:", s:find("%d+%.%d+"))
print("gsub:", (s:gsub("%s+", "_")))
print("upper sub rep:", s:upper():sub(1, 4):rep(2))

local words = {}
for word in s:gmatch("%a+") do
  words[#words + 1] = word
end
print("words:", table.concat(words, " "))
print("byte and char:", string.byte("A"), string.char(86, 97, 114, 110))
`},{module:`Lua stdlib`,label:`table — insert, sort, concat, unpack`,code:`-- the table library to build sort join and unpack arrays
local t = { "banana", "apple", "cherry" }
table.insert(t, "date")
table.remove(t, 1)
table.sort(t)
print("sorted:", table.concat(t, ", "))

local nums = { 3, 1, 2 }
table.sort(nums, function(a, b) return a > b end)
print("desc:", table.unpack(nums))
print("count:", #t)
`},{module:`Lua stdlib`,label:`math — round, roots, random`,code:`-- the math library for rounding roots extremes and randomness
print("floor and ceil:", math.floor(3.7), math.ceil(3.2))
print("sqrt and abs:", math.sqrt(144), math.abs(-9))
print("max and min:", math.max(3, 8, 1), math.min(3, 8, 1))
print("pi:", string.format("%.5f", math.pi))

math.randomseed(42)
print("random:", math.random(1, 6), math.random(1, 6))
print("type:", math.type(3), math.type(3.0))
`},{module:`Lua stdlib`,label:`coroutine — cooperative tasks`,code:`-- coroutines are cooperative tasks that yield values and resume where they left off
local function squares(limit)
  for i = 1, limit do
    coroutine.yield(i * i)
  end
end

local co = coroutine.create(squares)
for _ = 1, 3 do
  local ok, value = coroutine.resume(co, 3)
  print("resumed:", ok, value)
end
print("status:", coroutine.status(co))

local gen = coroutine.wrap(function()
  for c in ("abc"):gmatch(".") do
    coroutine.yield(c)
  end
end)
print("wrap:", gen(), gen(), gen())
`},{module:`Lua stdlib`,label:`metatable — operators & objects`,code:`-- metatables give operator overloading and prototype-based objects
local Vec = {}
Vec.__index = Vec

function Vec.new(x, y)
  return setmetatable({ x = x, y = y }, Vec)
end

function Vec.__add(a, b)
  return Vec.new(a.x + b.x, a.y + b.y)
end

function Vec:length()
  return math.sqrt(self.x ^ 2 + self.y ^ 2)
end

function Vec.__tostring(v)
  return string.format("(%d, %d)", v.x, v.y)
end

local sum = Vec.new(3, 4) + Vec.new(1, 2)
print("sum:", tostring(sum))
print("length:", Vec.new(3, 4):length())
`},{module:`Lua stdlib`,label:`os — time, date, clock`,code:`-- the os library for time dates and a high-resolution clock
print("time is a number:", type(os.time()))
print("formatted date:", os.date("!%Y-%m-%d %H:%M:%S", 1750000000))

local started = os.clock()
local sum = 0
for i = 1, 1000000 do
  sum = sum + i
end
print("sum 1..1e6:", sum)
print(string.format("cpu time: %.3f s", os.clock() - started))
`},{module:`datetime`,label:`datetime — parse, format, math`,code:`local datetime = require("datetime")

local d = datetime.parse("2026-06-21T12:30:00Z")
print("iso:", d:iso())
print("weekday:", d:weekdayName(), "day of year:", d:fields().yearday)

-- calendar-aware arithmetic clamps to the end of a short month
print("jan 31 + 1 month:", datetime.parse("2026-01-31"):add({ months = 1 }):iso())

-- diffs in plain or calendar units
print("days apart:", datetime.parse("2026-03-15"):diffIn(datetime.parse("2026-01-10"), "days"))

-- render the same instant at a fixed utc offset
print("in +05:30:", d:iso(330))
`},{module:`json`,label:`json — encode & decode`,code:`local json = require("json")

local text = json.encode({ name = "varn", tags = { "fast", "small" }, version = 1 })
print("encoded:", text)

local value = json.decode(text)
print("name:", value.name)
print("first tag:", value.tags[1])

print("pretty:")
print(json.encode({ user = { id = 1, roles = { "admin" } } }, { pretty = true }))
`},{module:`xml`,label:`xml — encode & decode`,code:`local xml = require("xml")

-- build a document from the node model
local doc = xml.encode({
  name = "note",
  attributes = { priority = "high" },
  children = {
    { name = "to", text = "Lua" },
    { name = "from", text = "C++" },
  },
}, { pretty = true })
print(doc)

-- parse it back into the same node model
local node = xml.decode(doc)
print("root:", node.name)
print("priority:", node.attributes.priority)
print("first child:", node.children[1].name, node.children[1].text)
`},{module:`crypto`,label:`crypto — digests, hmac, codecs, uuid`,code:`local crypto = require("crypto")

print("sha256:", crypto.digest("SHA256", "varn"))
print("sha512:", crypto.digest("SHA512", "varn"):sub(1, 32) .. "…")
print("hmac:", crypto.hmac("SHA256", "secret-key", "message"))

print("base64:", crypto.base64Encode("hello, varn"))
print("hex:", crypto.hexEncode("abc"))

print("uuid v4:", crypto.uuidV4())
print("uuid v7:", crypto.uuidV7())
print("random:", crypto.hexEncode(crypto.randomBytes(8)))

-- AES-GCM, scrypt and PBKDF2 are native-only and raise in the browser build.
`},{module:`fs`,label:`fs — read & write (MEMFS)`,code:`local async = require("async")
local fs = require("fs")

async.spawn(function()
  fs.writeFile("demo.txt", "hello from lua\\n"):await()

  local content = fs.readFile("demo.txt"):await()
  print("read back:", content)
end)
`},{module:`zip`,label:`zip — create & list`,code:`local async = require("async")
local zip = require("zip")

async.spawn(function()
  -- write a source file into MEMFS
  local file = io.open("hello.txt", "w")
  file:write("zipped!\\n")
  file:close()

  local _, err = zip.create("demo.zip", { { file = "hello.txt", entry = "a/hello.txt" } }):await()
  if err then
    print("zip error:", err)
    return
  end

  local entries = zip.list("demo.zip"):await()
  print("entries:", table.concat(entries, ", "))
end)
`},{module:`async`,label:`async — sleep & spawn`,code:`local async = require("async")

print("start")
async.spawn(function()
  print("task started")
  async.sleep(1500):await()
  print("task woke up after 1500ms")
end)
print("main chunk returned first")
`},{module:`http`,label:`http — url encode & decode`,code:`local http = require("http")

-- percent-encoding works in every build, including the browser
local q = http.urlEncode("a b & c=d/e")
print("encoded:", q)
print("decoded:", http.urlDecode(q))
print("form plus:", http.urlDecode("name=jo%C3%A3o+silva"))
`},{module:`http`,label:`http — client fetch`,code:`local async = require("async")
local http = require("http")

-- the http client works in the browser through the fetch api, and httpbin /delay/N answers after N seconds so the await is visible
async.spawn(function()
  print("requesting with a 2s delay...")
  local res, err = http.client.get("https://httpbin.org/delay/2"):await()
  if err then
    print("request failed:", err)
    return
  end

  print("status:", res.status)
  print("ok:", res.ok)
end)

print("main chunk returned before the response arrived")
`},{module:`log`,label:`log — levels`,code:`local log = require("log")

log.debug("debug", 1)
log.info("info", "hello")
log.warn("careful")
log.error("boom", { code = 7 })

print("log lines were emitted")
`},{module:`platform`,label:`platform — system info`,code:`local p = require("platform")

print("os", p.os())
print("arch", p.arch())
print("cpus", p.cpuCount())
print("pointer bytes", p.pointerSize())
print("endianness", p.endianness())
print("host version", p.hostVersion())
`}];function d(t){let n=e(`div`,`mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:px-8`),r=e(`div`,`space-y-1`);r.appendChild(e(`h1`,`text-2xl font-semibold tracking-tight text-white`,`Playground`)),r.appendChild(e(`p`,`max-w-2xl text-sm leading-relaxed text-zinc-400`,`Lua runs in a Web Worker with Asyncify so you can stop long loops. Pick an example, grouped by the module it exercises, to try what is available in the browser build. Output is captured from print().`));let i=e(`div`,`grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]`),a=e(`section`,`flex flex-col gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 shadow-xl shadow-black/40 backdrop-blur`);a.appendChild(e(`h2`,`text-sm font-medium text-zinc-300`,`Editor`));let o=e(`div`,`flex items-center gap-2`);o.appendChild(e(`label`,`text-xs font-medium text-zinc-400`,`Example`));let s=document.createElement(`select`);s.className=`flex-1 rounded-lg border border-zinc-800 bg-zinc-950/80 px-2 py-1.5 text-sm text-zinc-200 outline-none transition focus:border-cyan-600/60`;let c=new Map;for(let e of u){let t=c.get(e.module);t||(t=document.createElement(`optgroup`),t.label=e.module,c.set(e.module,t),s.appendChild(t));let n=document.createElement(`option`);n.value=e.label,n.textContent=e.label,t.appendChild(n)}o.appendChild(s),a.appendChild(o);let d=document.createElement(`textarea`);d.rows=16,d.spellcheck=!1,d.autocomplete=`off`,d.className=`min-h-[220px] max-h-[440px] w-full resize-y varn-scroll rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-2 font-mono text-sm leading-relaxed text-cyan-50 outline-none ring-cyan-500/40 transition focus:border-cyan-600/60 focus:ring-2`,d.value=l,s.addEventListener(`change`,()=>{let e=u.find(e=>e.label===s.value);e&&(d.value=e.code)});let f=e(`div`,`flex flex-wrap gap-2`),p=`inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 disabled:cursor-not-allowed disabled:opacity-40`,m=e(`button`,`inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-40`,`Run`),h=e(`button`,p,`Stop`),g=e(`button`,p,`Clear output`);m.type=`button`,h.type=`button`,g.type=`button`,a.appendChild(d),f.appendChild(m),f.appendChild(h),f.appendChild(g),a.appendChild(f);let _=e(`section`,`flex min-h-[320px] flex-col gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 shadow-xl shadow-black/40 backdrop-blur`);_.appendChild(e(`h2`,`text-sm font-medium text-zinc-300`,`Console`));let v=document.createElement(`pre`);v.className=`h-[440px] overflow-auto varn-scroll rounded-xl border border-zinc-800 bg-black/50 p-3 font-mono text-xs leading-relaxed text-emerald-200/95`,v.textContent=`Ready.
`;let y=e(`p`,`text-xs text-zinc-500`,`Worker idle.`);_.appendChild(v),_.appendChild(y),i.appendChild(a),i.appendChild(_),n.appendChild(r),n.appendChild(i),t.appendChild(n);let b=(e,t)=>{let n=document.createElement(`span`);t===`error`&&(n.className=`text-red-400`),n.textContent=e.endsWith(`
`)?e:`${e}\n`,v.appendChild(n),v.scrollTop=v.scrollHeight},x,S=!1,C=e=>{x.postMessage(e)},w=e=>{let t=e.data;if(t.type===`ready`){S=!0,y.textContent=`Worker ready.`,m.disabled=!1;return}if(t.type===`done`){let e=t.result;e.output&&b(e.output.trimEnd()),!e.ok&&e.error&&b(`error: ${e.error}`,`error`),y.textContent=e.ok?`Finished.`:`Finished with errors.`,m.disabled=!1;return}t.type===`error`&&(b(`worker: ${t.message}`,`error`),y.textContent=`Error.`,m.disabled=!1)},T=e=>{b(`worker fault: ${e.message}`,`error`),y.textContent=`Worker fault.`,m.disabled=!1},E=()=>{x=new Worker(new URL(`/assets/worker-BP0gyNMm.js`,``+import.meta.url),{type:`module`}),x.onmessage=w,x.onerror=T,S=!1,m.disabled=!0,C({type:`init`})};return E(),m.addEventListener(`click`,()=>{if(!S){b(`worker: still loading wasm…`);return}m.disabled=!0,y.textContent=`Running…`,C({type:`run`,source:d.value})}),h.addEventListener(`click`,()=>{x.terminate(),b(`stopped.`),y.textContent=`Stopped.`,E()}),g.addEventListener(`click`,()=>{v.textContent=``,y.textContent=`Console cleared.`}),()=>{try{x.terminate()}catch{}}}var f=`https://github.com/varn-org/varn`;function p(t,n,r){let i=e(`a`,`rounded-md px-3 py-1.5 text-sm font-medium transition ${r?`bg-zinc-800 text-white`:`text-zinc-400 hover:bg-zinc-800/60 hover:text-white`}`,t);return i.href=n,n.startsWith(`http`)&&(i.target=`_blank`,i.rel=`noopener noreferrer`),i}function m(t){let n=e(`header`,`sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur`),r=e(`div`,`mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-8`),i=e(`a`,`flex items-center gap-2`);i.href=`#/`;let a=document.createElement(`img`);a.src=`/logo-light.svg`,a.alt=`Varn`,a.className=`h-6 w-auto`,i.appendChild(a),r.appendChild(i);let o=e(`nav`,`flex items-center gap-1`);return o.appendChild(p(`Home`,`#/`,!t)),o.appendChild(p(`Playground`,`#/playground`,t)),o.appendChild(p(`GitHub`,f,!1)),r.appendChild(o),n.appendChild(r),n}function h(){let t=e(`footer`,`border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500`),n=e(`div`,`mx-auto max-w-5xl px-4`);n.appendChild(document.createTextNode(`Varn · `));let r=e(`a`,`text-zinc-400 transition hover:text-white`,`github.com/varn-org/varn`);return r.href=f,r.target=`_blank`,r.rel=`noopener noreferrer`,n.appendChild(r),t.appendChild(n),t}var g;function _(){let t=document.querySelector(`#app`);if(!t)return;g&&=(g(),void 0),t.className=`flex min-h-dvh flex-col bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-50`,t.replaceChildren();let n=location.hash.startsWith(`#/playground`);t.appendChild(m(n));let r=e(`main`,`flex-1`);t.appendChild(r),n?g=d(r):c(r),t.appendChild(h()),window.scrollTo(0,0)}window.addEventListener(`hashchange`,_),_();