(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5688],{69453:function(e,r,t){Promise.resolve().then(t.bind(t,79879))},79879:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var a=t(36164),n=t(3546),s=t(2578),l=t(43240),o=t(98454),i=t(11634),d=t(74248),c=t(31458),u=t(81565),f=t(11208),m=t(52569);let x=(0,l.BX)("\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n"),p=()=>{var e;let[r,t]=(0,n.useState)(!1),[l,p]=(0,n.useState)(""),[{data:h}]=(0,o.P)(),v=(0,i.D)(x,{onError(e){s.A.error(e.message)}});if(!(null==h?void 0:null===(e=h.me)||void 0===e?void 0:e.email))return null;let w=async()=>{var e;t(!0);let r=await v({avatarBase64:l.split(",")[1],id:h.me.id});(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.uploadUserAvatarBase64)===!0&&(await (0,d.gw)(1e3),(0,m.n)(h.me.id),s.A.success("Successfully updated your profile picture!"),await (0,d.gw)(200)),p(""),t(!1)};return(0,a.jsxs)("div",{className:"grid gap-6",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("label",{htmlFor:"avatar-file",className:"absolute left-0 top-0 z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-background/90 opacity-0 transition-all hover:opacity-100",children:(0,a.jsx)(u.IconCloudUpload,{})}),(0,a.jsx)("input",{id:"avatar-file",type:"file",accept:"image/png, image/jpeg",className:"hidden",onChange:e=>{let r=e.target.files?e.target.files[0]:null;if(r){let e=parseFloat((r.size/1024).toFixed(2));if(e>500)return s.A.error("The image you are attempting to upload is too large. Please ensure the file size is under ".concat(500,"KB and try again."));let t=new FileReader;t.onloadend=()=>{let e=t.result;p(e)},t.readAsDataURL(r)}}}),l&&(0,a.jsx)("img",{src:l,className:"absolute left-0 top-0 z-10 h-16 w-16 rounded-full border object-cover",alt:"avatar to be uploaded"}),(0,a.jsx)(m.Y,{className:(0,d.cn)("relative h-16 w-16 border",{"opacity-0":l})})]}),(0,a.jsx)(f.Z,{}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)(c.z,{type:"submit",disabled:!l||r,onClick:w,className:"mr-5 w-40",children:[r&&(0,a.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]}),(0,a.jsx)("div",{className:"flex flex-1 justify-end",children:(0,a.jsx)("p",{className:" text-xs text-muted-foreground lg:text-sm",children:"Square image recommended. Accepted file types: .png, .jpg. Max file size: ".concat(500,"KB.")})})]})]})};var h=t(84381),v=t(5493),w=t(23782),j=t(98150),g=t(82394),N=t(90379);let b=(0,l.BX)("\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n"),y=e=>{let{onSuccess:r,defaultValues:t}=e,[{data:n}]=(0,o.P)(),s=w.Ry({name:w.Z_()}),l=(0,v.cI)({resolver:(0,h.F)(s),defaultValues:t}),{isSubmitting:d}=l.formState,{name:m}=l.watch(),x=(0,i.D)(b,{form:l,onCompleted(e){(null==e?void 0:e.updateUserName)&&(null==r||r())}}),p=async e=>{await x({id:n.me.id,name:e.name})},N=m!==t.name;return(0,a.jsx)(j.l0,{...l,children:(0,a.jsxs)("form",{className:"grid gap-6",onSubmit:l.handleSubmit(p),children:[(0,a.jsx)(j.Wi,{control:l.control,name:"name",render:e=>{let{field:r}=e;return(0,a.jsxs)(j.xJ,{children:[(0,a.jsx)(j.lX,{children:"Name"}),(0,a.jsx)(j.NI,{children:(0,a.jsx)(g.I,{className:"w-[350px]",...r})}),(0,a.jsx)(j.zG,{})]})}}),(0,a.jsx)(j.zG,{}),(0,a.jsx)(f.Z,{}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)(c.z,{type:"submit",disabled:!m||!N||d,className:"w-40",children:[d&&(0,a.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},C=()=>{let[{data:e},r]=(0,o.P)();return e?(0,a.jsx)(y,{onSuccess:()=>{s.A.success("Name is updated"),r()},defaultValues:{name:e.me.name}}):(0,a.jsx)(N.cg,{})};var S=t(4302);let _=(0,l.BX)("\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n"),I=e=>{let{onSuccess:r,showOldPassword:t}=e,[s,l]=n.useState(!1),[o,d]=n.useState(!1),m=w.Ry({oldPassword:t?w.Z_():w.Z_().optional(),newPassword1:w.Z_(),newPassword2:w.Z_()}),x=(0,v.cI)({resolver:(0,h.F)(m)}),{isSubmitting:p}=x.formState,{newPassword1:N}=x.watch(),[b]=(0,S.Y0)(N),y=(0,i.D)(_,{form:x,onCompleted(e){(null==e?void 0:e.passwordChange)&&(null==r||r(),x.reset({newPassword1:"",newPassword2:"",oldPassword:""}))}}),C=async e=>{await y({input:e})},I=()=>{if(0===b.length)return l(!1);d(!0)};return(0,a.jsx)(j.l0,{...x,children:(0,a.jsxs)("form",{className:"grid gap-6",onSubmit:x.handleSubmit(C),children:[t&&(0,a.jsx)(j.Wi,{control:x.control,name:"oldPassword",render:e=>{let{field:r}=e;return(0,a.jsxs)(j.xJ,{children:[(0,a.jsx)(j.lX,{required:!0,children:"Old password"}),(0,a.jsx)(j.NI,{children:(0,a.jsx)(g.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,a.jsx)(j.zG,{})]})}}),(0,a.jsxs)("div",{children:[(0,a.jsx)(j.Wi,{control:x.control,name:"newPassword1",render:e=>{let{field:r}=e;return(0,a.jsxs)(j.xJ,{children:[(0,a.jsx)(j.lX,{required:!0,children:"New password"}),(0,a.jsx)(j.NI,{children:(0,a.jsx)(g.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r,onFocus:()=>l(!0),onBlur:I})})]})}}),(0,a.jsx)(S.Lu,{password:N||"",showPasswordSchema:s,passworErrors:b,showPasswordError:o})]}),(0,a.jsx)(j.Wi,{control:x.control,name:"newPassword2",render:e=>{let{field:r}=e;return(0,a.jsxs)(j.xJ,{children:[(0,a.jsx)(j.lX,{required:!0,children:"Confirm new password"}),(0,a.jsx)(j.NI,{children:(0,a.jsx)(g.I,{className:"w-[350px]",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,a.jsx)(j.zG,{})]})}}),(0,a.jsx)(j.zG,{}),(0,a.jsx)(f.Z,{}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)(c.z,{type:"submit",disabled:p,className:"w-40",children:[p&&(0,a.jsx)(u.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Save Changes"]})})]})})},A=()=>{var e;let[{data:r},t]=(0,o.P)();return r?(0,a.jsx)(I,{onSuccess:()=>{s.A.success("Password is updated"),t()},showOldPassword:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.isPasswordSet}):(0,a.jsx)(N.cg,{})};var P=t(71480);let E=()=>{var e;let[{data:r}]=(0,o.P)();return(0,a.jsx)("div",{children:(0,a.jsx)(g.I,{disabled:!0,className:"w-[350px]",value:null==r?void 0:null===(e=r.me)||void 0===e?void 0:e.email,onChange:P.Z})})};var R=t(79972);let T=e=>{let{title:r,description:t,footer:n,footerClassname:s,className:l,children:o,...i}=e;return(0,a.jsxs)("div",{className:(0,d.cn)("flex w-full flex-col gap-8 rounded-lg border p-6 pb-0 xl:w-[800px]",l),...i,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(R.ll,{children:r}),t&&(0,a.jsx)("div",{className:"mt-4 text-sm text-muted-foreground",children:t})]}),(0,a.jsx)(R.aY,{className:"p-0",children:o}),(0,a.jsxs)("div",{className:(0,d.cn)("rounded-b-lg pb-6 text-sm text-muted-foreground",s),children:[!!n&&(0,a.jsx)(f.Z,{className:"mb-6"}),n]})]})};function k(){return(0,a.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[(0,a.jsx)(T,{title:"Your Name",footerClassname:"pb-0",children:(0,a.jsx)(C,{})}),(0,a.jsx)(T,{title:"Your Email",description:"This will be the email you use to log in and receive notifications.",footer:"The feature to change your email address will be available in a future release.",children:(0,a.jsx)(E,{})}),(0,a.jsx)(T,{title:"Your Avatar",description:"This is your avatar image.",footerClassname:"pb-0",children:(0,a.jsx)(p,{})}),(0,a.jsx)(T,{title:"Change Password",footerClassname:"pb-0",children:(0,a.jsx)(A,{})})]})}},4302:function(e,r,t){"use strict";t.d(r,{Lu:function(){return f},Y0:function(){return u}});var a,n,s=t(36164),l=t(3546),o=t(74630),i=t(23782),d=t(74248);(a=n||(n={})).LOWERCASE_MSISSING="lowercase_missing",a.UPPERCASE_MSISSING="uppercase_missing",a.NUMBER_MISSING="number_missing",a.SPECIAL_CHAR_MISSING="special_char_missing",a.AT_LEAST_EIGHT_CHAR="at_least_eight_char",a.AT_MOST_TWENTY_CHAT="at_most_twenty_char";let c=i.Z_().refine(e=>/[a-z]/.test(e),{params:{errorCode:n.LOWERCASE_MSISSING}}).refine(e=>/[A-Z]/.test(e),{params:{errorCode:n.UPPERCASE_MSISSING}}).refine(e=>/\d/.test(e),{params:{errorCode:n.NUMBER_MISSING}}).refine(e=>/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e),{params:{errorCode:n.SPECIAL_CHAR_MISSING}}).refine(e=>e.length>=8,{params:{errorCode:n.AT_LEAST_EIGHT_CHAR}}).refine(e=>e.length<=20,{params:{errorCode:n.AT_MOST_TWENTY_CHAT}}),u=e=>{let[r,t]=l.useState([]);return l.useEffect(()=>{if(!(0,o.Z)(e))try{c.parse(e),t([])}catch(e){e instanceof i.jm&&t(e.issues.map(e=>e.params.errorCode))}},[e]),[r,t]};function f(e){let{password:r,showPasswordSchema:t,passworErrors:a,showPasswordError:l}=e;function o(e){let{errorCode:t,text:n}=e;return(0,s.jsx)("li",{className:(0,d.cn)("py-0.5",{"text-green-600 dark:text-green-500":r.length>0&&!a.includes(t),"text-red-600 dark:text-red-500":l&&r.length>0&&a.includes(t)}),children:n})}return(0,s.jsxs)("div",{className:(0,d.cn)("relative text-sm transition-all",{"h-0 opacity-0 -z-10":!t,"mt-4 h-40 opacity-100":t}),children:[(0,s.jsx)("p",{className:"mb-0.5 text-xs text-muted-foreground",children:"Set up a strong password with"}),(0,s.jsxs)("ul",{className:"list-disc pl-4",children:[(0,s.jsx)(o,{errorCode:n.AT_LEAST_EIGHT_CHAR,text:"At least 8 characters long"}),(0,s.jsx)(o,{errorCode:n.AT_MOST_TWENTY_CHAT,text:"No more than 20 characters long"}),(0,s.jsx)(o,{errorCode:n.LOWERCASE_MSISSING,text:"At least one lowercase character"}),(0,s.jsx)(o,{errorCode:n.UPPERCASE_MSISSING,text:"At least one uppercase character"}),(0,s.jsx)(o,{errorCode:n.NUMBER_MISSING,text:"At least one numeric character"}),(0,s.jsx)(o,{errorCode:n.SPECIAL_CHAR_MISSING,text:"At least one special character , such as @#$%^&{}"})]})]})}},90379:function(e,r,t){"use strict";t.d(r,{PF:function(){return i},cg:function(){return l},tB:function(){return o}});var a=t(36164),n=t(74248),s=t(3448);let l=e=>{let{className:r,...t}=e;return(0,a.jsxs)("div",{className:(0,n.cn)("space-y-3",r),...t,children:[(0,a.jsx)(s.O,{className:"h-4 w-full"}),(0,a.jsx)(s.O,{className:"h-4 w-full"}),(0,a.jsx)(s.O,{className:"h-4 w-full"}),(0,a.jsx)(s.O,{className:"h-4 w-full"})]})},o=e=>{let{className:r,...t}=e;return(0,a.jsx)(s.O,{className:(0,n.cn)("h-4 w-full",r),...t})},i=e=>{let{className:r,...t}=e;return(0,a.jsxs)("div",{className:(0,n.cn)("flex flex-col gap-3",r),...t,children:[(0,a.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,a.jsx)(s.O,{className:"h-4 w-full"}),(0,a.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,a.jsx)(s.O,{className:"h-4 w-full"})]})}},31458:function(e,r,t){"use strict";t.d(r,{d:function(){return i},z:function(){return d}});var a=t(36164),n=t(3546),s=t(74047),l=t(14375),o=t(74248);let i=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:n,size:l,className:t})),ref:r,...c})});d.displayName="Button"},79972:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var a=t(36164),n=t(3546),s=t(74248);let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});l.displayName="Card";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...n})});u.displayName="CardFooter"},98150:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},pf:function(){return v},xJ:function(){return x},zG:function(){return w}});var a=t(36164),n=t(3546),s=t(74047),l=t(5493),o=t(74248),i=t(5266);let d=l.RV,c=n.createContext({}),u=e=>{let{...r}=e;return(0,a.jsx)(c.Provider,{value:{name:r.name},children:(0,a.jsx)(l.Qr,{...r})})},f=()=>{let e=n.useContext(c),r=n.useContext(m),{getFieldState:t,formState:a}=(0,l.Gc)(),s=e.name||"root",o=t(s,a);if(!a)throw Error("useFormField should be used within <Form>");let{id:i}=r;return{id:i,name:s,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...o}},m=n.createContext({}),x=n.forwardRef((e,r)=>{let{className:t,...s}=e,l=n.useId();return(0,a.jsx)(m.Provider,{value:{id:l},children:(0,a.jsx)("div",{ref:r,className:(0,o.cn)("space-y-2",t),...s})})});x.displayName="FormItem";let p=n.forwardRef((e,r)=>{let{className:t,required:n,...s}=e,{error:l,formItemId:d}=f();return(0,a.jsx)(i._,{ref:r,className:(0,o.cn)(l&&"text-destructive",n&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:d,...s})});p.displayName="FormLabel";let h=n.forwardRef((e,r)=>{let{...t}=e,{error:n,formItemId:l,formDescriptionId:o,formMessageId:i}=f();return(0,a.jsx)(s.g7,{ref:r,id:l,"aria-describedby":n?"".concat(o," ").concat(i):"".concat(o),"aria-invalid":!!n,...t})});h.displayName="FormControl";let v=n.forwardRef((e,r)=>{let{className:t,...n}=e,{formDescriptionId:s}=f();return(0,a.jsx)("div",{ref:r,id:s,className:(0,o.cn)("text-sm text-muted-foreground",t),...n})});v.displayName="FormDescription";let w=n.forwardRef((e,r)=>{let{className:t,children:n,...s}=e,{error:l,formMessageId:i}=f(),d=l?String(null==l?void 0:l.message):n;return d?(0,a.jsx)("p",{ref:r,id:i,className:(0,o.cn)("text-sm font-medium text-destructive",t),...s,children:d}):null});w.displayName="FormMessage"},82394:function(e,r,t){"use strict";t.d(r,{I:function(){return l}});var a=t(36164),n=t(3546),s=t(74248);let l=n.forwardRef((e,r)=>{let{className:t,type:n,...l}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...l})});l.displayName="Input"},5266:function(e,r,t){"use strict";t.d(r,{_:function(){return d}});var a=t(36164),n=t(3546),s=t(90893),l=t(14375),o=t(74248);let i=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(s.f,{ref:r,className:(0,o.cn)(i(),t),...n})});d.displayName=s.f.displayName},11208:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var a=t(36164),n=t(3546),s=t(74225),l=t(74248);let o=n.forwardRef((e,r)=>{let{className:t,orientation:n="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(s.f,{ref:r,decorative:o,orientation:n,className:(0,l.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",t),...i})});o.displayName=s.f.displayName},3448:function(e,r,t){"use strict";t.d(r,{O:function(){return s}});var a=t(36164),n=t(74248);function s(e){let{className:r,...t}=e;return(0,a.jsx)("div",{className:(0,n.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",r),...t})}},52569:function(e,r,t){"use strict";t.d(r,{Y:function(){return j},n:function(){return g}});var a=t(36164),n=t(3546),s=t(87782),l=t(21454),o=t(36327),i=t(98454),d=t(3765),c=t(74248),u=t(66612);let f=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(u.fC,{ref:r,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...n})});f.displayName=u.fC.displayName;let m=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(u.Ee,{ref:r,className:(0,c.cn)("aspect-square h-full w-full",t),...n})});m.displayName=u.Ee.displayName;let x=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)(u.NY,{ref:r,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...n})});x.displayName=u.NY.displayName;var p=t(3448),h=t(30410).lW;let v="not_found",w=!0;function j(e){var r,t,l,u;let{className:j,fallback:g}=e,[{data:N}]=(0,i.P)(),b=null==N?void 0:N.me.id,y=b&&"/avatar/".concat(N.me.id)||null,{data:C,isLoading:S,error:_}=(0,o.Z)(y,e=>{if(w)return(0,d.Z)(e,{responseFormatter:async e=>{let r=await e.blob(),t=h.from(await r.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(v)}})}),I=n.useMemo(()=>{var e;if(null==N?void 0:null===(e=N.me)||void 0===e?void 0:e.email)return(0,s.B)(N.me.email)},[null==N?void 0:null===(r=N.me)||void 0===r?void 0:r.email]);return S?(0,a.jsx)(p.O,{className:(0,c.cn)("h-16 w-16 rounded-full",j)}):((null==_?void 0:_.message)===v&&(w=!1),C||I||!g)?!C&&I?(0,a.jsx)(s.Z,{className:(0,c.cn)("h-16 w-16",j),...I}):(0,a.jsxs)(f,{className:(0,c.cn)("h-16 w-16",j),children:[(0,a.jsx)(m,{src:C,alt:null==N?void 0:null===(t=N.me)||void 0===t?void 0:t.email,className:"object-cover"}),(0,a.jsx)(x,{children:null==N?void 0:null===(u=N.me)||void 0===u?void 0:null===(l=u.email)||void 0===l?void 0:l.substring(0,2)})]}):g}let g=e=>{w=!0,(0,l.JG)("/avatar/".concat(e))}},98454:function(e,r,t){"use strict";t.d(r,{P:function(){return l}});var a=t(40055),n=t(43240);let s=(0,n.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n      name\n    }\n  }\n"),l=()=>(0,a.aM)({query:s})},3765:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var a=t(44745),n=t(57778),s=t(79716),l=t(91302),o=t(66794);async function i(e,r){var t;let a=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;if(function(e){var r;if(e.startsWith("/oauth/providers"))return!1;let t=null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken;if(!t)return!0;try{let{exp:e}=(0,s.o)(t);return(0,o.pw)(e)}catch(e){return!0}}(e))return o.gN.refreshToken(d).then(t=>f(e,r));let n=await a(e,c(r));return 401===n.status?(o.gN.clearAccessToken(),o.gN.refreshToken(d).then(t=>f(e,r))):m(n,r)}async function d(){var e,r;let t=null===(e=(0,o.bW)())||void 0===e?void 0:e.refreshToken;if(!t)return;let a=await u(t);return null==a?void 0:null===(r=a.data)||void 0===r?void 0:r.refreshToken}function c(e){var r;let t=new Headers(null==e?void 0:e.headers);return t.append("authorization","Bearer ".concat(null===(r=(0,o.bW)())||void 0===r?void 0:r.accessToken)),{...e||{},headers:t}}async function u(e){let r=new a.KU({url:"/graphql",requestPolicy:"network-only",exchanges:[a.Ek]}),t=r.createRequestOperation("mutation",(0,n.h)(l.Dp,{refreshToken:e}));return r.executeMutation(t)}function f(e,r){var t;let a=null!==(t=null==r?void 0:r.customFetch)&&void 0!==t?t:window.fetch;return a(e,c(r)).then(e=>m(e,r))}function m(e,r){return(null==e?void 0:e.ok)?(null==r?void 0:r.responseFormatter)?r.responseFormatter(e):(null==r?void 0:r.responseFormat)==="blob"?e.blob():e.json():(null==r?void 0:r.errorHandler)?r.errorHandler(e):void 0}}},function(e){e.O(0,[7998,5498,6312,2578,240,1454,4546,9275,7570,9736,1565,3396,3375,5289,1744],function(){return e(e.s=69453)}),_N_E=e.O()}]);