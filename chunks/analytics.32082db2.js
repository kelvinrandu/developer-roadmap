document.querySelector("[close-sponsor]")?.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),document.getElementById("sponsor-ad")?.classList.add("hidden")})),window.setTimeout((()=>{const e=document.querySelector("#sponsor-ad");!e||(e.classList.remove("hidden"),e.classList.add("flex"))}),500),window.fireEvent=e=>{const{action:t,category:n,label:o,value:s}=e;window.gtag?window.gtag("event",t,{event_category:n,event_label:o,value:s}):console.warn("Missing GTAG - Analytics disabled")};