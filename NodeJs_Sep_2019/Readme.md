**V8 Engine** – JavaScript engine  

**Libuv** – A high performance , cross-platform evented I/O library. (Node Js use this for IO operations) 

**REPL** – Read, Evaluate , Print and Loop 

Node JS – We are creating servers in Node JS unlike using servers like Apache, IIS. So there is no intermediate.  

Two ways of code execution  in Node JS– **Blocking** & **Non Blocking** (default). 

**Modules** – *Built-in*, *3rd Party* & *User defined*.  

npm install --production : to install only dependencies  

package.json :  

preinstall  in scripts entry  - to install before npm install 

Non Blocking can be implemented by *Async callback* or *Event Emitters*  

Async callback functions (*Request & Response pattern*) : No partial results (for example error in the middle of file reading).  

**Event emitter** emits events ( *Publishers & Subscriber pattern* ) 

http built-in module to create server 

**Express (Web Framework)**  

    Create web app 

    Enable Rabid application development  

    Routing 

    Cookies/Sessions 

    View Engines. 

**Streams** 

    Reading – *flowing* (data events will be emitted) 

    Paused – *non-flowing* (no event will be emitted) 

    Default format is bytes 

    Readable or Writable Streams :  

        FileStream 

        Network Stream 

        Buffer Stream 

    Readable and Writeable stream.  

        Duplex Stream ( TCP, WebSockets ) 

**Web Sockets**

**Node JS Tooling**  

    Gulp 
    Define tasks 
    Gulpfile.js (configurations)
    Run task using (Gulp) 
    Grunt 
    Webpack 

**Unit Testing**

    BDD/TDD  (Test first -> App -> make test cases successs) 
    Test Suites -> Collection of test cases  
    Jasmine 
    Test Runner -> Karma  

 