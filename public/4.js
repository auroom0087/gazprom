(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isCreate: false,
      isEdit: "false",
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
      editorConfig: {// The configuration of the editor.
      },
      post: {
        title: "",
        body: "",
        user_id: "",
        id: ""
      },
      getPosts: {
        title: "",
        body: "",
        user_id: "",
        id: ""
      },
      user_id: "",
      likes: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.user_id = JSON.parse(localStorage.getItem("user")).id;
    console.log("USer id " + this.user_id);
    axios.put("/api/auth/getMyPosts/" + this.user_id, {
      user: this.user_id
    }, {
      headers: {
        "X-CSRF-TOKEN": window.Laravel.csrfToken
      }
    }).then(function (res) {
      _this.getPosts = res.data.posts;
      _this.likes = res.data.likes;
    });
  },
  methods: {
    checkLikes: function checkLikes(id) {
      for (var i = 0; i < this.likes.length; i++) {
        if (this.likes[i].post_id == id) {
          return false;
        }
      }

      return true;
    },
    create: function create() {
      var _this2 = this;

      this.post.user_id = JSON.parse(localStorage.getItem("user")).id;
      console.log(this.prop);
      axios.post("/api/auth/createPost", this.post, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        console.log(_this2.getPosts);
        _this2.post.title = "";
        _this2.post.body = "";
        _this2.user_id = JSON.parse(localStorage.getItem("user")).id;
        axios.put("/api/auth/getMyPosts/" + _this2.user_id, {
          user: _this2.user_id
        }, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this2.getPosts = res.data.posts;
          _this2.likes = res.data.likes;
        });
      });
    },
    deletePost: function deletePost(id) {
      var _this3 = this;

      axios.get("/api/auth/deletePost/" + id, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        console.log(res);
        _this3.user_id = JSON.parse(localStorage.getItem("user")).id;
        axios.put("/api/auth/getMyPosts/" + _this3.user_id, {
          user: _this3.user_id
        }, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this3.getPosts = res.data.posts;
          _this3.likes = res.data.likes;
        });
      });
    },
    editPost: function editPost(id) {
      var _this4 = this;

      this.isEdit = !this.isEdit;
      axios.get("/api/auth/showPost/" + id, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        _this4.post.title = res.data.post[0].title;
        _this4.post.body = res.data.post[0].body;
        _this4.post.id = res.data.post[0].id;
        console.log(_this4.post);
      });
    },
    updatePost: function updatePost() {
      var _this5 = this;

      axios.put("/api/auth/updatePost/" + this.post.id, {
        title: this.post.title,
        body: this.post.body
      }, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        console.log(res);
        _this5.post.title = "";
        _this5.post.body = "";
        axios.put("/api/auth/getMyPosts/" + _this5.user_id, {
          user: _this5.user_id
        }, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this5.getPosts = res.data.posts;
          _this5.likes = res.data.likes;
          _this5.isEdit = !_this5.isEdit;
        });
      });
    },
    like: function like(id) {
      var _this6 = this;

      console.log(this.user_id);
      axios.post("/api/auth/like", {
        user: this.user_id,
        post: id
      }, {
        headers: {
          "X-CSRF-TOKEN": window.Laravel.csrfToken
        }
      }).then(function (res) {
        console.log(res);
        _this6.user_id = JSON.parse(localStorage.getItem("user")).id;
        axios.put("/api/auth/getMyPosts/" + _this6.user_id, {
          user: _this6.user_id
        }, {
          headers: {
            "X-CSRF-TOKEN": window.Laravel.csrfToken
          }
        }).then(function (res) {
          _this6.getPosts = res.data.posts;
          _this6.likes = res.data.likes;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "d-flex flex-column justify-start", attrs: { fluid: "" } },
    [
      !_vm.isCreate
        ? _c(
            "v-btn",
            {
              staticClass: "align-self-start ml-5",
              on: {
                click: function($event) {
                  _vm.isCreate = true
                }
              }
            },
            [_vm._v("Создать статью")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isCreate
        ? _c(
            "v-card",
            {
              staticClass: "d-flex flex-column pa-6 justify-space-between",
              attrs: { width: "97%", "min-height": "40%" }
            },
            [
              _c("h2", [_vm._v("Создать статью")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Название",
                          name: "title",
                          type: "text"
                        },
                        model: {
                          value: _vm.post.title,
                          callback: function($$v) {
                            _vm.$set(_vm.post, "title", $$v)
                          },
                          expression: "post.title"
                        }
                      }),
                      _vm._v(" "),
                      _c("ckeditor", {
                        attrs: { editor: _vm.editor, config: _vm.editorConfig },
                        model: {
                          value: _vm.post.body,
                          callback: function($$v) {
                            _vm.$set(_vm.post, "body", $$v)
                          },
                          expression: "post.body"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6", to: "/shareExperience" },
                          on: {
                            click: function($event) {
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Закрыть")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6", to: "/shareExperience" },
                          on: {
                            click: function($event) {
                              _vm.updatePost()
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Изменить")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isEdit
                    ? _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: { color: "#0057B6", to: "/shareExperience" },
                          on: {
                            click: function($event) {
                              _vm.create()
                              _vm.isCreate = false
                            }
                          }
                        },
                        [_vm._v("Создать")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("br")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.getPosts, function(getPost, id) {
        return _c(
          "div",
          { key: getPost.id },
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  {
                    staticClass: "d-flex justify-center align-center sm-col-12 "
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "ma-5 pa-10",
                        attrs: { "max-width": "120vh" }
                      },
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "showPost",
                                    params: { id: getPost.id }
                                  }
                                }
                              },
                              [_c("h3", [_vm._v(_vm._s(getPost.title))])]
                            ),
                            _vm._v(" "),
                            _c("p", [
                              _c("span", {
                                domProps: { innerHTML: _vm._s(getPost.body) }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              {
                                staticClass:
                                  "d-flex flex-column justify-center align-center"
                              },
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                getPost.user_id == _vm.user_id
                                  ? _c(
                                      "div",
                                      { attrs: { width: "100%" } },
                                      [
                                        _c(
                                          "v-row",
                                          {
                                            attrs: {
                                              justify: "center",
                                              align: "center"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  sm: "4",
                                                  xs: "4"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "white--text ",
                                                    attrs: { color: "#0057B6" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.deletePost(
                                                          getPost.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Удалить")]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  sm: "4",
                                                  xs: "4"
                                                }
                                              },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    staticClass: "white--text",
                                                    attrs: { color: "#0057B6" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.editPost(
                                                          getPost.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Изменить")]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  sm: "4",
                                                  xs: "4"
                                                }
                                              },
                                              [
                                                _vm.checkLikes(getPost.id)
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            staticClass:
                                                              "white--text",
                                                            attrs: {
                                                              color: "#0057B6"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.like(
                                                                  getPost.id
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("v-icon", [
                                                              _vm._v(
                                                                "fa-thumbs-up"
                                                              )
                                                            ])
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShareExperience.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareExperience.vue?vue&type=template&id=2d7b0a8e& */ "./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&");
/* harmony import */ var _ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareExperience.vue?vue&type=script&lang=js& */ "./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_7__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShareExperience.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareExperience.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareExperience.vue?vue&type=template&id=2d7b0a8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareExperience.vue?vue&type=template&id=2d7b0a8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareExperience_vue_vue_type_template_id_2d7b0a8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);