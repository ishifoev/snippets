exports.ids=[16],exports.modules={72:function(e,t,r){"use strict";r.r(t);var l={props:{snippet:{required:!0,type:Object},step:{required:!0,type:Object}},methods:{async deleteStep(){await this.$axios.$delete(`snippets/${this.snippet.uuid}/steps/${this.step.uuid}`),this.$emit("deleted",this.step)}}},h=r(1),component=Object(h.a)(l,function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{staticClass:"block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0",attrs:{href:"#",to:{},title:"Delete step"},on:{click:function(t){return t.preventDefault(),e.deleteStep(t)}}},[e._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-white h-6 w-6 "><path d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"></path></svg>')])},[],!1,null,null,"29cd1217");t.default=component.exports}};
//# sourceMappingURL=d2ab9d751bfb4e6c59d7.js.map