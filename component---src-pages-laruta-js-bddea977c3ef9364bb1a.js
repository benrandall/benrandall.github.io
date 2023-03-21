"use strict";(self.webpackChunkbengr_studio=self.webpackChunkbengr_studio||[]).push([[13],{7408:function(e,t,a){var n=a(7462),r=a(3366),o=a(5900),s=a.n(o),c=a(7294),l=a(9541),i=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=c.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,m=e.as,h=void 0===m?"div":m,u=(0,r.Z)(e,i),f=(0,l.vE)(a,"col"),p=[],g=[];return d.forEach((function(e){var t,a,n,r=u[e];if(delete u[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+f+s:""+f+s+"-"+t),null!=n&&g.push("order"+s+"-"+n),null!=a&&g.push("offset"+s+"-"+a)})),p.length||p.push(f),c.createElement(h,(0,n.Z)({},u,{ref:t,className:s().apply(void 0,[o].concat(p,g))}))}));m.displayName="Col",t.Z=m},994:function(e,t,a){var n=a(7462),r=a(3366),o=a(5900),s=a.n(o),c=a(7294),l=a(9541),i=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=c.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,m=e.noGutters,h=e.as,u=void 0===h?"div":h,f=(0,r.Z)(e,i),p=(0,l.vE)(a,"row"),g=p+"-cols",b=[];return d.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+g+n+"-"+t)})),c.createElement(u,(0,n.Z)({ref:t},f,{className:s().apply(void 0,[o,p,m&&"no-gutters"].concat(b))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.Z=m},670:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var n=a(7294),r=(a(5444),a(1989)),o=a(994),s=a(7408),c=a.p+"static/larutaheader-29e326fc31f9aa88bd837d52b6198360.jpg",l=a.p+"static/screenshot1-57abafa8ebf492268c18f4d5a6122f42.png",i=a.p+"static/screenshot2-e211a5bd5fe01b338d6f97ff6b45de4a.png",d=a.p+"static/LRTA-SystemsDiagram01_02-eacbaec2c2ffab718c0f50eb1e8de21e.png",m=a.p+"static/softwareflow-38390435e92df70f345f298c8ffdfad8.png",h=a.p+"static/obs-2890e26aa3e454f34ac79bb912329db1.png",u=a.p+"static/audio-a9e881b5854b74694338ab49be652119.png",f=a.p+"static/newtworkfull-a8739902b21a79f75a9ae01c1dd0b16b.png",p=a.p+"static/network1-2a8ea74503e1ce733fbd9c4d90b349cf.png",g=a.p+"static/network2-490a1626e36b1fa14be5d2cd8735e27b.png",b=a.p+"static/network3-8faa111f52e04d7a16c3ba965eef510e.png",w=a.p+"static/network4-2270f8c3aa93ac1b7278abbcc36a8145.png",E=a.p+"static/network5-7ea167c6666b72f570003d5d2ae5e947.png",v=a.p+"static/qlab-0398be87174cacca56cd7489c3e40155.png",k=a.p+"static/Network_10-27-2020_OSCcallbacks_load-900px-6b73cc838905e1a55996400b7d5ad37f.png",y=a.p+"static/Network_10-27-2020_presetutilities_loadpreset-900px-6183dd112197f0fc2ddc21c0c15a201a.png",T=a.p+"static/Network_10-27-2020_OSCcallbacks_msg-78330820f5ca9500bf772e3c26ff5715.png",D=a.p+"static/Untitled-8df177dffe3be60b2d04da73e95d38ca.png",_=a.p+"static/Untitled (1)-92133dd803e7a6ca50c844b2646b8429.png",N=a.p+"static/Untitled (2)-aa5522ac6bc7667636d42ac83ebfe53e.png",I=a.p+"static/Untitled (3)-e9015ef4c39816c5b45d709d7167a1a8.png",S=a.p+"static/Untitled (4)-b0bf1726e690f1a5d105865758f5a8b9.png";var x=function(){return n.createElement(r.Z,null,n.createElement("div",{className:"blog-container container"},n.createElement("h1",null,"La Ruta"),n.createElement("img",{src:c}),n.createElement("h2",null,"Building a Remote Production Desk with TouchDesigner"),n.createElement("p",null,"In Isaac Gómez's La Ruta, we are told the heartbreaking story of a border town, a bus route and the women of Ciudad Juárez. Inspired by real testimonies from women affected by the ongoing femicides along the border, La Ruta weaves together beautiful storytelling and music in a celebration of the resilience of Mexican women in the wake of tremendous loss. Read more about this stage play and its production ",n.createElement("a",{href:"https://www.notion.so/utim/Building-a-Remote-Production-Desk-with-TouchDesigner-0732e0f8f2464a38aecc14a910ad514c#87f9cf8aab1b4c97a2c7dcb7bb42290f",target:"_blank",rel:"noreferrer"},"here"),"."),n.createElement("br",null),n.createElement("p",null,"I was brought into the production of La Ruta after the pivot to a remote production was decided. The media designer’s role in this play, which previously was traditional media creation and stage projection, quickly grew into a massive, tangled up job of systems engineering, media design, direction, and audio engineering. John Erickson, the media designer, brought me in as his assistant. In this role, I took over solving the technical aspects of the performance, and early on we decided that our remote queuing/compositing system would primarily live in TouchDesigner."),n.createElement("br",null),n.createElement("p",null,"Our baseline goal for La Ruta was a live-streamed table read. You can imagine this as a Zoom stream of the actors rehearsing their parts from their individual homes, with less emphasis on a polished performance. As the production began to develop, the idea evolved into a Zoom/Skype call between all the actors with customizable window placements, dynamic media backgrounds, and programmable cues. From this point, we drew up a list of technical challenges: working with remote performers in multiple locations, compositing and arranging their streams in real time, having a familiar cueing system for John and our operator, and individual audio routing for all the actors. Through the planning process, John’s design choices influenced our technical needs and my technical research influenced the end design."),n.createElement("br",null),n.createElement("p",null,"Our technical objective, as it became more focused, was to be able to ingest and manipulate nine different live feeds from actors in 2D space and to recall each unique layout based on cues sent from a seperate computer running QLab. We also wanted the actor feeds to have soft, blurred edges, rather than sharp rectangular windows. Finally, the media designer (John) wanted to be able to composite the actor feeds on top of content sent from QLab , and have that final video and audio be streamed to Vimeo."),n.createElement("br",null),n.createElement("p",null,"Here’s a sneak peak of what we would end up designing, with this in mind:"),n.createElement("br",null),n.createElement(o.Z,null,n.createElement(s.Z,null,n.createElement("img",{src:l})),n.createElement(s.Z,null,n.createElement("img",{src:i}))),n.createElement("p",null,"So, with the goal outlined, let’s take a look at the final system diagram:"),n.createElement("img",{src:d}),n.createElement("p",null,"This is a little dense, so here’s the software system flow. The actor feeds are individually sent to the main PC via OBS.Ninja."),n.createElement("div",{className:"center"},n.createElement("img",{src:m})),n.createElement("p",null,"The OBS.Ninja browser sources are arranged in a 3×3 grid like so."),n.createElement("img",{src:h}),n.createElement("p",null,"OBS also receives the audio from the audio desk. A soundboard operator is controlling OBS with an Akai APC MKII."),n.createElement("img",{src:u}),n.createElement("p",null,"Video and audio is routed to TouchDesigner on the same machine via NDI."),n.createElement("p",null,"The entire TouchDesigner network looks like this:"),n.createElement("img",{src:f}),n.createElement("p",null,"Again, this is a bit dense, so I’ll break it down by section. On the left we have all of the controls that have to do with the actor input feeds. The actor feeds come in through the NDIin TOP from OBS. We found it useful to have a test feed to run tech in case the actors were not on camera. The cache is there to sync audio and video. The video player pulled pre-recorded cuts of the actors out of a folder for certain parts of the performance. The switching between these was done programmatically based on cue."),n.createElement("img",{src:p}),n.createElement("p",null,"The actor feed is then sent to the two cue decks (",n.createElement("b",null,"Deck A")," and ",n.createElement("b",null,"Deck B"),") which are programmatically loaded and called based on cue. These bases are clones of ",n.createElement("b",null,"base_fx_Storage"),"."),n.createElement("img",{src:g}),n.createElement("p",null,"Let’s step into ",n.createElement("b",null,"base_fx_Storage"),". In here, the composite feed is cropped 3×3 and each feed is sent to an effects base. The feeds are then composited back together after effects are applied."),n.createElement("img",{src:b}),n.createElement("p",null,"In each effects base, we can control each actor feed’s crop, soft edges, monochrome, level effects, size, and placement on a 16:9 screen."),n.createElement("img",{src:w}),n.createElement("div",{className:"center"},n.createElement("img",{src:E})),n.createElement("p",null,"So how are these settings stored and recalled? This system takes advantage of the internal storage of a TouchDesigner component. With a bit of Python, we are able to store and recall all of the custom parameters of each actor feed. This part of the project was directly sourced from two of Matthew Ragan’s wonderful tutorials: ",n.createElement("a",{href:"https://www.notion.so/utim/Building-a-Remote-Production-Desk-with-TouchDesigner-0732e0f8f2464a38aecc14a910ad514c#6363af9f98664905aa8f69fd0588a3c9",target:"_blank",rel:"noreferrer"},"  Case Study | Custom Parameters and Cues")," and ",n.createElement("a",{href:"https://matthewragan.com/2017/06/08/presets-and-cue-building-touchdesigner-099/",target:"_blank",rel:"noreferrer"},"Presets and cue building"),"."),n.createElement("p",null,"Now for the actual cueing system. The QLab Macbook controls all our cueing. On each cue, QLab sends an OSC string over the network to the TouchDesigner computer. This is an example of a sample OSC string. The media designer and I decided on a uniform cue format: ",n.createElement("mark",null,'"/Q/" + cue number + "/" + transition time'),"."),n.createElement("img",{src:v}),n.createElement("p",null,"In TouchDesigner, we would interpret this string with the code below. This code splits up the message into the relevant parts. A message such as /Q/10/2 is interpreted like this: ",n.createElement("mark",null,"msg_source")," is the source (“Q”), ",n.createElement("mark",null,"preset_name")," is the cue number (“7”), and ",n.createElement("mark",null,"trans_time")," is the transition time that the media designer would designate, in seconds (“2”)."),n.createElement("img",{src:T}),n.createElement("p",null,"Next, we want to load the next cue and change decks based on which deck we’re currently in."),n.createElement("img",{src:k}),n.createElement("p",null,"In ",n.createElement("mark",null,"load_preset"),", we fetch the stored preset from the storage base’s internal memory, and load each preset into the target deck."),n.createElement("img",{src:y}),n.createElement("p",null,"Once the new deck has been loaded and crossfaded appropriately, we can composite the media video feed from the QLab computer onto this actor feed setup. We have two feeds below: a live feed (",n.createElement("b",null,"comp2"),") and a tech feed (",n.createElement("b",null,"comp3"),")."),n.createElement("img",{src:D}),n.createElement("p",null,"The media designer and I could adjust and compare cues and not worry about disrupting the final feed during tech rehearsals. Below, you can see the screen I had set up to see the final feed, the tech/storage feed, audio signal, a list to load cues into the storage feed, and a settings panel for adjusting the individual actor feeds."),n.createElement("img",{src:_}),n.createElement("p",null,"A few custom cues had videos that played on top of the actor feeds, so another video player was added. The final products are sent to a director/stage manager monitor and a tech monitor, as well as the streaming computer via NDI."),n.createElement("img",{src:N}),n.createElement("p",null,"The director’s feed was set up as a TV a couple yards away from the TouchDesigner computer. Because of the latency added by each step of the process, our stage manager needed to call tech cues based on the final product, but also needed to call staging cues based on the actor zoom, a difference of about 5 to 15 seconds, depending on the internet that day. Below, the stage manager Skyler is viewing the final feed on the left and the OBS screen on the right."),n.createElement("img",{src:I}),n.createElement("p",null,"Finally, on the streaming computer, we had an OBS window that accepted the TouchDesigner feed via NDI and streamed that feed to Vimeo."),n.createElement("img",{src:S}),n.createElement("p",null,"And, voila! We had a fully remote show."),n.createElement("p",null,"Check out the TouchDesigner file ",n.createElement("a",{href:"http://github.com/benrandall/Remote-Production-Desk",target:"_blank",rel:"noreferrer"},"here.")),n.createElement("p",null)))}}}]);
//# sourceMappingURL=component---src-pages-laruta-js-bddea977c3ef9364bb1a.js.map