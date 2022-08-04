"use strict";(self.webpackChunkproject_diac=self.webpackChunkproject_diac||[]).push([[592],{6700:(b,h,i)=>{i.d(h,{c:()=>l});var s=i(4522),a=i(8260),u=i(3668);let l=(()=>{class r{constructor(t){this.http=t}addAsignatura(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/course`,o,{headers:c})}allAsignaturas(){const t=localStorage.getItem("token")||"",e=a.N.baseURL,n=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${t}`);return this.http.get(`${e}/course`,{headers:n})}updateObjective(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=e,p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.put(`${o}/course/objective/${t}`,c,{headers:p})}updateDestreza(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=e,p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.put(`${o}/course/destreza/${t}`,c,{headers:p})}addDestreza(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c={destrezas:e},p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.post(`${o}/course/${t}/destreza`,c,{headers:p})}addObjective(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c={objectives:e},p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.post(`${o}/course/${t}/objective`,c,{headers:p})}deleteObjective(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.delete(`${n}/course/objective/${t}`,{headers:o})}deleteDestreza(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.delete(`${n}/course/destreza/${t}`,{headers:o})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(s.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2321:(b,h,i)=>{i.d(h,{H:()=>l});var s=i(4522),a=i(8260),u=i(3668);let l=(()=>{class r{constructor(t){this.http=t}getDocentes(){const t=localStorage.getItem("token")||"",e=a.N.baseURL,n=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${t}`);return this.http.get(`${e}/teacher`,{headers:n})}getDocentesByCourse(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/teacher/filter/courses`,o,{headers:c})}addDocente(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/teacher`,o,{headers:c})}addUser(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/user`,o,{headers:c})}updateDocente(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=e,p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.put(`${o}/teacher/${t}`,c,{headers:p})}eliminarDocente(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.delete(`${n}/teacher/${t}`,{headers:o})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(s.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5389:(b,h,i)=>{i.d(h,{C:()=>l});var s=i(4522),a=i(8260),u=i(3668);let l=(()=>{class r{constructor(t){this.http=t}getStudent(){const t=localStorage.getItem("token")||"",e=a.N.baseURL,n=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${t}`);return this.http.get(`${e}/student`,{headers:n})}getStudentByNameOrLastName(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.get(`${o}/student/filter?nombre=${t}&apellido=${e}`,{headers:c})}addEstudiante(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/student`,o,{headers:c})}updateEstudiante(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=e,p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.put(`${o}/student/${t}`,c,{headers:p})}eliminarEstudiante(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.delete(`${n}/student/${t}`,{headers:o})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(s.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},1255:(b,h,i)=>{i.d(h,{v:()=>l});var s=i(4522),a=i(8260),u=i(3668);let l=(()=>{class r{constructor(t){this.http=t}getInstitutions(){const t=localStorage.getItem("token")||"",e=a.N.baseURL,n=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${t}`);return this.http.get(`${e}/institution`,{headers:n})}getInstitutionsByName(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.get(`${n}/institution/filter?nombre=${t}`,{headers:o})}addInstitution(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=t,c=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.post(`${n}/institution`,o,{headers:c})}updateInstitution(t,e){const n=localStorage.getItem("token")||"",o=a.N.baseURL,c=e,p=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${n}`);return this.http.put(`${o}/institution/${t}`,c,{headers:p})}eliminarInstitucion(t){const e=localStorage.getItem("token")||"",n=a.N.baseURL,o=(new s.WM).set("Content-Type","application/json").set("authorization",`bearer ${e}`);return this.http.delete(`${n}/institution/${t}`,{headers:o})}}return r.\u0275fac=function(t){return new(t||r)(u.LFG(s.eN))},r.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);