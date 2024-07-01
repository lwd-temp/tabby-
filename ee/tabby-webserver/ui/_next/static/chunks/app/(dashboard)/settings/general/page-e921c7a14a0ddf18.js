(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1519],{50605:function(e,t,n){Promise.resolve().then(n.bind(n,87303))},87303:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(36164),s=n(3546),i=n(11208),l=n(74248);let a=e=>{let{title:t,className:n,children:s,...i}=e;return(0,r.jsxs)("div",{className:(0,l.cn)("lg:flex",n),...i,children:[(0,r.jsx)("div",{className:"text-left lg:w-1/5",children:(0,r.jsx)("h1",{className:"text-2xl font-bold",children:t})}),(0,r.jsx)("div",{className:"flex-1 lg:px-4",children:(0,r.jsx)("div",{className:"mb-7 mt-4 lg:mt-0",children:s})})]})};var o=n(84381),c=n(94909),d=n(5493),u=n(2578),f=n(23782),m=n(43240),x=n(70526),h=n(11634),p=n(31458),g=n(98150),v=n(82394),j=n(6230),b=n(90379);let y=(0,m.BX)("\n  mutation updateNetworkSettingMutation($input: NetworkSettingInput!) {\n    updateNetworkSetting(input: $input)\n  }\n"),N=f.Ry({externalUrl:f.Z_()}),w=e=>{let{onSuccess:t,defaultValues:n}=e,s=(0,d.cI)({resolver:(0,o.F)(N),defaultValues:n}),i=!(0,c.Z)(s.formState.dirtyFields),l=(0,h.D)(y,{form:s,onCompleted(e){(null==e?void 0:e.updateNetworkSetting)&&(null==t||t(),s.reset(s.getValues()))}}),a=async()=>{await l({input:s.getValues()})};return(0,r.jsx)(g.l0,{...s,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("form",{className:"grid gap-6",onSubmit:s.handleSubmit(a),children:[(0,r.jsx)(g.Wi,{control:s.control,name:"externalUrl",render:e=>{let{field:t}=e;return(0,r.jsxs)(g.xJ,{children:[(0,r.jsx)(g.lX,{children:"External URL"}),(0,r.jsx)(g.pf,{children:"The external URL where user visits Tabby, must start with http:// or https://."}),(0,r.jsx)(g.NI,{children:(0,r.jsx)(v.I,{placeholder:"e.g. http://localhost:8080",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",...t})}),(0,r.jsx)(g.zG,{})]})}}),(0,r.jsx)("div",{className:"mt-2 flex justify-end",children:(0,r.jsx)(p.z,{type:"submit",disabled:!i,children:"Update"})})]}),(0,r.jsx)(g.zG,{className:"text-center"})]})})},S=()=>{let[{data:e,stale:t},n]=(0,x.e)();return(0,r.jsx)("div",{className:"min-h-[160px]",children:(0,r.jsx)(j.Z,{loading:!e||t,fallback:(0,r.jsx)(b.PF,{}),children:(0,r.jsx)(w,{defaultValues:null==e?void 0:e.networkSetting,onSuccess:()=>{u.A.success("Network configuration is updated"),n()}})})})};var k=n(1853),C=n(40055),R=n(18500),z=n(30317),I=n(81565);let D=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(z.fC,{ref:t,className:(0,l.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",n),...s,children:(0,r.jsx)(z.z$,{className:(0,l.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(I.IconCheck,{className:"h-4 w-4"})})})});D.displayName=z.fC.displayName;var F=n(94770);let O=(0,m.BX)("\n  mutation updateSecuritySetting($input: SecuritySettingInput!) {\n    updateSecuritySetting(input: $input)\n  }\n"),Z=(0,m.BX)("\n  query SecuritySetting {\n    securitySetting {\n      allowedRegisterDomainList\n      disableClientSideTelemetry\n    }\n  }\n"),E=f.Ry({disableClientSideTelemetry:f.O7(),allowedRegisterDomainList:f.IX(f.Ry({value:f.Z_()})).optional()}),L=e=>{let{onSuccess:t,defaultValues:n}=e,s=(0,d.cI)({resolver:(0,o.F)(E),defaultValues:n}),{fields:i,append:a,remove:u,update:f}=(0,d.Dq)({control:s.control,name:"allowedRegisterDomainList"}),m=!(0,c.Z)(s.formState.dirtyFields),x=e=>{(null==i?void 0:i.length)===1&&0===e?f(e,{value:""}):u(e)},j=e=>{"Enter"!==e.key||e.nativeEvent.isComposing||(e.preventDefault(),a({value:""}))},b=(0,h.D)(O,{form:s,onCompleted(e){(null==e?void 0:e.updateSecuritySetting)&&(null==t||t(),s.reset(s.getValues()))}}),y=async e=>{let{allowedRegisterDomainList:t,...n}=e;await b({input:{allowedRegisterDomainList:function(e){let t=(0,k.Z)(null==e?void 0:e.map(e=>e.value));return t}(t),...n}})};return(0,r.jsx)(g.l0,{...s,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("form",{className:"grid gap-6",onSubmit:s.handleSubmit(y),children:[(0,r.jsx)(g.Wi,{control:s.control,name:"disableClientSideTelemetry",render:e=>{let{field:t}=e;return(0,r.jsxs)(g.xJ,{children:[(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)(g.NI,{children:(0,r.jsx)(D,{checked:t.value,onCheckedChange:t.onChange})}),(0,r.jsx)(g.lX,{className:"cursor-pointer",children:"Disabling Client Side Telemetry"})]}),(0,r.jsx)(g.pf,{children:"When activated, the client-side telemetry (IDE/Extensions) will be disabled, regardless of the client-side settings."})]})}}),(0,r.jsxs)("div",{children:[i.map((e,t)=>(0,r.jsx)(g.Wi,{control:s.control,name:"allowedRegisterDomainList.".concat(t,".value"),render:e=>{let{field:n}=e;return(0,r.jsxs)(g.xJ,{children:[(0,r.jsx)(g.lX,{className:(0,l.cn)(0!==t&&"sr-only"),children:"Authentication Domains"}),(0,r.jsx)(g.pf,{className:(0,l.cn)(0!==t&&"sr-only"),children:"Enable users to sign up automatically with an email address on domains."}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(g.NI,{children:(0,r.jsx)(v.I,{placeholder:"e.g. tabbyml.com",...n,onKeyDown:j})}),(0,r.jsx)(p.z,{variant:"hover-destructive",onClick:e=>x(t),children:(0,r.jsx)(I.IconTrash,{})})]}),(0,r.jsx)(g.zG,{})]})}},e.id)),(0,r.jsx)("div",{children:(0,r.jsx)(p.z,{type:"button",variant:"outline",size:"sm",className:"mt-2",onClick:()=>a({value:""}),children:"Add domain"})})]}),(0,r.jsx)("div",{className:"mt-2 flex justify-end",children:(0,r.jsx)(F.M,{licenses:[R.oj.Enterprise],children:e=>{let{hasValidLicense:t}=e;return(0,r.jsx)(p.z,{type:"submit",disabled:!t||!m,children:"Update"})}})})]}),(0,r.jsx)(g.zG,{className:"text-center"})]})})},U=()=>{let[{data:e,stale:t,fetching:n},s]=(0,C.aM)({query:Z}),i=e&&{...e.securitySetting,allowedRegisterDomainList:function(e){let t=null==e?void 0:e.map(e=>({value:e}));return t&&0!==t.length?t:[{value:""}]}(e.securitySetting.allowedRegisterDomainList)};return(0,r.jsx)(j.Z,{loading:n||t,fallback:(0,r.jsx)(b.PF,{}),children:(0,r.jsx)(L,{defaultValues:i,onSuccess:()=>{u.A.success("Security configuration is updated"),s()}})})};function V(){return(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(a,{title:"Network",children:(0,r.jsx)(S,{})}),(0,r.jsx)(i.Z,{className:"mb-8"}),(0,r.jsx)(a,{title:"Security",children:(0,r.jsx)(U,{})})]})}},94770:function(e,t,n){"use strict";n.d(t,{M:function(){return m}});var r=n(36164),s=n(3546),i=n(70652),l=n.n(i),a=n(88542),o=n(18500),c=n(29917),d=n(74248),u=n(31458),f=n(90615);let m=e=>{let{licenses:t,children:n}=e,[i,m]=s.useState(!1),x=(0,c.Gm)(),h=!!x&&x.status===o.Rj.Ok&&t.includes(x.type),p=e=>{h||m(e)},g=(0,a.Z)(t[0]),v=g;return 2==t.length&&(v="".concat((0,a.Z)(t[0])," or ").concat((0,a.Z)(t[1]))),(0,r.jsxs)(f.zs,{open:i,onOpenChange:p,openDelay:100,children:[(0,r.jsxs)(f.bZ,{side:"top",collisionPadding:16,className:"w-[400px]",children:[(0,r.jsxs)("div",{children:["This feature is only available on Tabby's"," ",(0,r.jsx)("span",{className:"font-semibold",children:v})," plan. Upgrade to use this feature."]}),(0,r.jsx)("div",{className:"mt-4 text-center",children:(0,r.jsxs)(l(),{className:(0,u.d)(),href:"/settings/subscription",children:["Upgrade to ",g]})})]}),(0,r.jsx)(f.Yi,{asChild:!0,onClick:e=>{h||(e.preventDefault(),p(!0))},children:(0,r.jsx)("div",{className:(0,d.cn)(h?"":"cursor-not-allowed"),children:n({hasValidLicense:h,license:x})})})]})};m.displayName="LicenseGuard"},6230:function(e,t,n){"use strict";var r=n(36164),s=n(3546),i=n(24449),l=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:a,children:o}=e,[c,d]=s.useState(!t),[u]=(0,i.n)(c,null!=a?a:200);return(s.useEffect(()=>{t||c||d(!0)},[t]),u)?o:n||(0,r.jsx)(l.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return l},tB:function(){return a}});var r=n(36164),s=n(74248),i=n(3448);let l=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("space-y-3",t),...n,children:[(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})},a=e=>{let{className:t,...n}=e;return(0,r.jsx)(i.O,{className:(0,s.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,s.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"}),(0,r.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(i.O,{className:"h-4 w-full"})]})}},31458:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return c}});var r=n(36164),s=n(3546),i=n(74047),l=n(14375),a=n(74248);let o=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:n,variant:s,size:l,asChild:c=!1,...d}=e,u=c?i.g7:"button";return(0,r.jsx)(u,{className:(0,a.cn)(o({variant:s,size:l,className:n})),ref:t,...d})});c.displayName="Button"},98150:function(e,t,n){"use strict";n.d(t,{NI:function(){return p},Wi:function(){return u},l0:function(){return c},lX:function(){return h},pf:function(){return g},xJ:function(){return x},zG:function(){return v}});var r=n(36164),s=n(3546),i=n(74047),l=n(5493),a=n(74248),o=n(5266);let c=l.RV,d=s.createContext({}),u=e=>{let{...t}=e;return(0,r.jsx)(d.Provider,{value:{name:t.name},children:(0,r.jsx)(l.Qr,{...t})})},f=()=>{let e=s.useContext(d),t=s.useContext(m),{getFieldState:n,formState:r}=(0,l.Gc)(),i=e.name||"root",a=n(i,r);if(!r)throw Error("useFormField should be used within <Form>");let{id:o}=t;return{id:o,name:i,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},m=s.createContext({}),x=s.forwardRef((e,t)=>{let{className:n,...i}=e,l=s.useId();return(0,r.jsx)(m.Provider,{value:{id:l},children:(0,r.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",n),...i})})});x.displayName="FormItem";let h=s.forwardRef((e,t)=>{let{className:n,required:s,...i}=e,{error:l,formItemId:c}=f();return(0,r.jsx)(o._,{ref:t,className:(0,a.cn)(l&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',n),htmlFor:c,...i})});h.displayName="FormLabel";let p=s.forwardRef((e,t)=>{let{...n}=e,{error:s,formItemId:l,formDescriptionId:a,formMessageId:o}=f();return(0,r.jsx)(i.g7,{ref:t,id:l,"aria-describedby":s?"".concat(a," ").concat(o):"".concat(a),"aria-invalid":!!s,...n})});p.displayName="FormControl";let g=s.forwardRef((e,t)=>{let{className:n,...s}=e,{formDescriptionId:i}=f();return(0,r.jsx)("div",{ref:t,id:i,className:(0,a.cn)("text-sm text-muted-foreground",n),...s})});g.displayName="FormDescription";let v=s.forwardRef((e,t)=>{let{className:n,children:s,...i}=e,{error:l,formMessageId:o}=f(),c=l?String(null==l?void 0:l.message):s;return c?(0,r.jsx)("p",{ref:t,id:o,className:(0,a.cn)("text-sm font-medium text-destructive",n),...i,children:c}):null});v.displayName="FormMessage"},90615:function(e,t,n){"use strict";n.d(t,{Yi:function(){return o},bZ:function(){return c},zs:function(){return a}});var r=n(36164),s=n(3546),i=n(38421),l=n(74248);let a=i.fC,o=i.xz,c=s.forwardRef((e,t)=>{let{className:n,align:s="center",sideOffset:a=4,...o}=e;return(0,r.jsx)(i.VY,{ref:t,align:s,sideOffset:a,className:(0,l.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})});c.displayName=i.VY.displayName},82394:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(36164),s=n(3546),i=n(74248);let l=s.forwardRef((e,t)=>{let{className:n,type:s,...l}=e;return(0,r.jsx)("input",{type:s,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...l})});l.displayName="Input"},5266:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var r=n(36164),s=n(3546),i=n(90893),l=n(14375),a=n(74248);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)(i.f,{ref:t,className:(0,a.cn)(o(),n),...s})});c.displayName=i.f.displayName},11208:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(36164),s=n(3546),i=n(74225),l=n(74248);let a=s.forwardRef((e,t)=>{let{className:n,orientation:s="horizontal",decorative:a=!0,...o}=e;return(0,r.jsx)(i.f,{ref:t,decorative:a,orientation:s,className:(0,l.cn)("shrink-0 bg-border","horizontal"===s?"h-[1px] w-full":"h-full w-[1px]",n),...o})});a.displayName=i.f.displayName},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return i}});var r=n(36164),s=n(74248);function i(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return a},n:function(){return o}});var r=n(3546),s=n(45391),i=n(16784);let l=e=>{let t=(0,i.d)(e);r.useEffect(()=>()=>{t.current()},[])};function a(e,t,n){let a=(0,i.d)(e),o=r.useMemo(()=>(0,s.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.current(...t)},t,n),[]);return l(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[s,i]=r.useState(e),{run:l}=a(()=>{i(e)},t,n);return r.useEffect(()=>{l()},[e]),[s,i]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(3546);function s(e){let t=r.useRef(e);return t.current=e,t}},29917:function(e,t,n){"use strict";n.d(t,{Gm:function(){return a},jp:function(){return l}});var r=n(40055),s=n(43240);let i=(0,s.BX)("\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n"),l=()=>(0,r.aM)({query:i}),a=()=>{let[{data:e}]=l();return null==e?void 0:e.license}},70526:function(e,t,n){"use strict";n.d(t,{e:function(){return o},j:function(){return c}});var r=n(3546),s=n(40055),i=n(43240),l=n(74248);let a=(0,i.BX)("\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n"),o=e=>(0,s.aM)({query:a,...e}),c=()=>{let[{data:e}]=o(),t=null==e?void 0:e.networkSetting,n=r.useMemo(()=>(null==t?void 0:t.externalUrl)||((0,l.S_)()?new URL(window.location.href).origin:""),[t]);return n}}},function(e){e.O(0,[7998,5498,6312,4007,5384,1283,3449,2578,240,9317,9610,159,9736,1565,3396,3375,5289,1744],function(){return e(e.s=50605)}),_N_E=e.O()}]);