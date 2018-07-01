/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function ($protobuf) {
    "use strict";
    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.gameconf = (function () {
        /**
         * Namespace gameconf.
         * @exports gameconf
         * @namespace
         */
        var gameconf = {};
        /**
         * SkillTyp enum.
         * @name gameconf.SkillTyp
         * @enum {string}
         * @property {number} STInvalid=0 STInvalid value
         * @property {number} STNormal=1 STNormal value
         * @property {number} STFire=2 STFire value
         * @property {number} STWater=3 STWater value
         * @property {number} STGrass=4 STGrass value
         */
        gameconf.SkillTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "STInvalid"] = 0;
            values[valuesById[1] = "STNormal"] = 1;
            values[valuesById[2] = "STFire"] = 2;
            values[valuesById[3] = "STWater"] = 3;
            values[valuesById[4] = "STGrass"] = 4;
            return values;
        })();
        /**
         * SkillAttackTyp enum.
         * @name gameconf.SkillAttackTyp
         * @enum {string}
         * @property {number} SATInvliad=0 SATInvliad value
         * @property {number} SATAttack=1 SATAttack value
         * @property {number} SATSpecial=2 SATSpecial value
         * @property {number} SATChange=3 SATChange value
         */
        gameconf.SkillAttackTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SATInvliad"] = 0;
            values[valuesById[1] = "SATAttack"] = 1;
            values[valuesById[2] = "SATSpecial"] = 2;
            values[valuesById[3] = "SATChange"] = 3;
            return values;
        })();
        /**
         * SkillEffectObjectTyp enum.
         * @name gameconf.SkillEffectObjectTyp
         * @enum {string}
         * @property {number} SEOTInvalid=0 SEOTInvalid value
         * @property {number} SEOTSelf=1 SEOTSelf value
         * @property {number} SEOTOpponent=2 SEOTOpponent value
         */
        gameconf.SkillEffectObjectTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SEOTInvalid"] = 0;
            values[valuesById[1] = "SEOTSelf"] = 1;
            values[valuesById[2] = "SEOTOpponent"] = 2;
            return values;
        })();
        /**
         * SkillEffectTyp enum.
         * @name gameconf.SkillEffectTyp
         * @enum {string}
         * @property {number} SETInvliad=0 SETInvliad value
         * @property {number} SETFire=1 SETFire value
         * @property {number} SETAttack=2 SETAttack value
         */
        gameconf.SkillEffectTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SETInvliad"] = 0;
            values[valuesById[1] = "SETFire"] = 1;
            values[valuesById[2] = "SETAttack"] = 2;
            return values;
        })();
        gameconf.DoNotUseThis = (function () {
            /**
             * Properties of a DoNotUseThis.
             * @memberof gameconf
             * @interface IDoNotUseThis
             * @property {Array.<gameconf.IDoNotUseThisDefine>|null} [DoNotUseThis] DoNotUseThis DoNotUseThis
             */
            /**
             * Constructs a new DoNotUseThis.
             * @memberof gameconf
             * @classdesc Represents a DoNotUseThis.
             * @implements IDoNotUseThis
             * @constructor
             * @param {gameconf.IDoNotUseThis=} [properties] Properties to set
             */
            function DoNotUseThis(properties) {
                this.DoNotUseThis = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * DoNotUseThis DoNotUseThis.
             * @member {Array.<gameconf.IDoNotUseThisDefine>} DoNotUseThis
             * @memberof gameconf.DoNotUseThis
             * @instance
             */
            DoNotUseThis.prototype.DoNotUseThis = $util.emptyArray;
            /**
             * Creates a new DoNotUseThis instance using the specified properties.
             * @function create
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {gameconf.IDoNotUseThis=} [properties] Properties to set
             * @returns {gameconf.DoNotUseThis} DoNotUseThis instance
             */
            DoNotUseThis.create = function create(properties) {
                return new DoNotUseThis(properties);
            };
            /**
             * Encodes the specified DoNotUseThis message. Does not implicitly {@link gameconf.DoNotUseThis.verify|verify} messages.
             * @function encode
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {gameconf.IDoNotUseThis} message DoNotUseThis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoNotUseThis.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.DoNotUseThis != null && message.DoNotUseThis.length)
                    for (var i = 0; i < message.DoNotUseThis.length; ++i)
                        $root.gameconf.DoNotUseThisDefine.encode(message.DoNotUseThis[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified DoNotUseThis message, length delimited. Does not implicitly {@link gameconf.DoNotUseThis.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {gameconf.IDoNotUseThis} message DoNotUseThis message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoNotUseThis.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a DoNotUseThis message from the specified reader or buffer.
             * @function decode
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameconf.DoNotUseThis} DoNotUseThis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoNotUseThis.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameconf.DoNotUseThis();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.DoNotUseThis && message.DoNotUseThis.length))
                                message.DoNotUseThis = [];
                            message.DoNotUseThis.push($root.gameconf.DoNotUseThisDefine.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a DoNotUseThis message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameconf.DoNotUseThis} DoNotUseThis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoNotUseThis.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a DoNotUseThis message.
             * @function verify
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoNotUseThis.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.DoNotUseThis != null && message.hasOwnProperty("DoNotUseThis")) {
                    if (!Array.isArray(message.DoNotUseThis))
                        return "DoNotUseThis: array expected";
                    for (var i = 0; i < message.DoNotUseThis.length; ++i) {
                        var error = $root.gameconf.DoNotUseThisDefine.verify(message.DoNotUseThis[i]);
                        if (error)
                            return "DoNotUseThis." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a DoNotUseThis message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameconf.DoNotUseThis} DoNotUseThis
             */
            DoNotUseThis.fromObject = function fromObject(object) {
                if (object instanceof $root.gameconf.DoNotUseThis)
                    return object;
                var message = new $root.gameconf.DoNotUseThis();
                if (object.DoNotUseThis) {
                    if (!Array.isArray(object.DoNotUseThis))
                        throw TypeError(".gameconf.DoNotUseThis.DoNotUseThis: array expected");
                    message.DoNotUseThis = [];
                    for (var i = 0; i < object.DoNotUseThis.length; ++i) {
                        if (typeof object.DoNotUseThis[i] !== "object")
                            throw TypeError(".gameconf.DoNotUseThis.DoNotUseThis: object expected");
                        message.DoNotUseThis[i] = $root.gameconf.DoNotUseThisDefine.fromObject(object.DoNotUseThis[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a DoNotUseThis message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameconf.DoNotUseThis
             * @static
             * @param {gameconf.DoNotUseThis} message DoNotUseThis
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoNotUseThis.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.DoNotUseThis = [];
                if (message.DoNotUseThis && message.DoNotUseThis.length) {
                    object.DoNotUseThis = [];
                    for (var j = 0; j < message.DoNotUseThis.length; ++j)
                        object.DoNotUseThis[j] = $root.gameconf.DoNotUseThisDefine.toObject(message.DoNotUseThis[j], options);
                }
                return object;
            };
            /**
             * Converts this DoNotUseThis to JSON.
             * @function toJSON
             * @memberof gameconf.DoNotUseThis
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoNotUseThis.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return DoNotUseThis;
        })();
        gameconf.DoNotUseThisDefine = (function () {
            /**
             * Properties of a DoNotUseThisDefine.
             * @memberof gameconf
             * @interface IDoNotUseThisDefine
             * @property {number|null} [ConfID] DoNotUseThisDefine ConfID
             */
            /**
             * Constructs a new DoNotUseThisDefine.
             * @memberof gameconf
             * @classdesc Represents a DoNotUseThisDefine.
             * @implements IDoNotUseThisDefine
             * @constructor
             * @param {gameconf.IDoNotUseThisDefine=} [properties] Properties to set
             */
            function DoNotUseThisDefine(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * DoNotUseThisDefine ConfID.
             * @member {number} ConfID
             * @memberof gameconf.DoNotUseThisDefine
             * @instance
             */
            DoNotUseThisDefine.prototype.ConfID = 0;
            /**
             * Creates a new DoNotUseThisDefine instance using the specified properties.
             * @function create
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {gameconf.IDoNotUseThisDefine=} [properties] Properties to set
             * @returns {gameconf.DoNotUseThisDefine} DoNotUseThisDefine instance
             */
            DoNotUseThisDefine.create = function create(properties) {
                return new DoNotUseThisDefine(properties);
            };
            /**
             * Encodes the specified DoNotUseThisDefine message. Does not implicitly {@link gameconf.DoNotUseThisDefine.verify|verify} messages.
             * @function encode
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {gameconf.IDoNotUseThisDefine} message DoNotUseThisDefine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoNotUseThisDefine.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ConfID != null && message.hasOwnProperty("ConfID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.ConfID);
                return writer;
            };
            /**
             * Encodes the specified DoNotUseThisDefine message, length delimited. Does not implicitly {@link gameconf.DoNotUseThisDefine.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {gameconf.IDoNotUseThisDefine} message DoNotUseThisDefine message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoNotUseThisDefine.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a DoNotUseThisDefine message from the specified reader or buffer.
             * @function decode
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gameconf.DoNotUseThisDefine} DoNotUseThisDefine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoNotUseThisDefine.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameconf.DoNotUseThisDefine();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.ConfID = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a DoNotUseThisDefine message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gameconf.DoNotUseThisDefine} DoNotUseThisDefine
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoNotUseThisDefine.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a DoNotUseThisDefine message.
             * @function verify
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoNotUseThisDefine.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ConfID != null && message.hasOwnProperty("ConfID"))
                    if (!$util.isInteger(message.ConfID))
                        return "ConfID: integer expected";
                return null;
            };
            /**
             * Creates a DoNotUseThisDefine message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gameconf.DoNotUseThisDefine} DoNotUseThisDefine
             */
            DoNotUseThisDefine.fromObject = function fromObject(object) {
                if (object instanceof $root.gameconf.DoNotUseThisDefine)
                    return object;
                var message = new $root.gameconf.DoNotUseThisDefine();
                if (object.ConfID != null)
                    message.ConfID = object.ConfID | 0;
                return message;
            };
            /**
             * Creates a plain object from a DoNotUseThisDefine message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gameconf.DoNotUseThisDefine
             * @static
             * @param {gameconf.DoNotUseThisDefine} message DoNotUseThisDefine
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoNotUseThisDefine.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.ConfID = 0;
                if (message.ConfID != null && message.hasOwnProperty("ConfID"))
                    object.ConfID = message.ConfID;
                return object;
            };
            /**
             * Converts this DoNotUseThisDefine to JSON.
             * @function toJSON
             * @memberof gameconf.DoNotUseThisDefine
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoNotUseThisDefine.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return DoNotUseThisDefine;
        })();
        return gameconf;
    })();
    $root.gamedef = (function () {
        /**
         * Namespace gamedef.
         * @exports gamedef
         * @namespace
         */
        var gamedef = {};
        gamedef.LoginInfo = (function () {
            /**
             * Properties of a LoginInfo.
             * @memberof gamedef
             * @interface ILoginInfo
             * @property {string|null} [ip] LoginInfo ip
             * @property {string|null} [region] LoginInfo region
             */
            /**
             * Constructs a new LoginInfo.
             * @memberof gamedef
             * @classdesc Represents a LoginInfo.
             * @implements ILoginInfo
             * @constructor
             * @param {gamedef.ILoginInfo=} [properties] Properties to set
             */
            function LoginInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * LoginInfo ip.
             * @member {string} ip
             * @memberof gamedef.LoginInfo
             * @instance
             */
            LoginInfo.prototype.ip = "";
            /**
             * LoginInfo region.
             * @member {string} region
             * @memberof gamedef.LoginInfo
             * @instance
             */
            LoginInfo.prototype.region = "";
            /**
             * Creates a new LoginInfo instance using the specified properties.
             * @function create
             * @memberof gamedef.LoginInfo
             * @static
             * @param {gamedef.ILoginInfo=} [properties] Properties to set
             * @returns {gamedef.LoginInfo} LoginInfo instance
             */
            LoginInfo.create = function create(properties) {
                return new LoginInfo(properties);
            };
            /**
             * Encodes the specified LoginInfo message. Does not implicitly {@link gamedef.LoginInfo.verify|verify} messages.
             * @function encode
             * @memberof gamedef.LoginInfo
             * @static
             * @param {gamedef.ILoginInfo} message LoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ip != null && message.hasOwnProperty("ip"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.ip);
                if (message.region != null && message.hasOwnProperty("region"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.region);
                return writer;
            };
            /**
             * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link gamedef.LoginInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.LoginInfo
             * @static
             * @param {gamedef.ILoginInfo} message LoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a LoginInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.LoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.LoginInfo} LoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.LoginInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.ip = reader.string();
                            break;
                        case 2:
                            message.region = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.LoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.LoginInfo} LoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a LoginInfo message.
             * @function verify
             * @memberof gamedef.LoginInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                if (message.region != null && message.hasOwnProperty("region"))
                    if (!$util.isString(message.region))
                        return "region: string expected";
                return null;
            };
            /**
             * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.LoginInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.LoginInfo} LoginInfo
             */
            LoginInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.LoginInfo)
                    return object;
                var message = new $root.gamedef.LoginInfo();
                if (object.ip != null)
                    message.ip = String(object.ip);
                if (object.region != null)
                    message.region = String(object.region);
                return message;
            };
            /**
             * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.LoginInfo
             * @static
             * @param {gamedef.LoginInfo} message LoginInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.ip = "";
                    object.region = "";
                }
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = message.region;
                return object;
            };
            /**
             * Converts this LoginInfo to JSON.
             * @function toJSON
             * @memberof gamedef.LoginInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return LoginInfo;
        })();
        gamedef.Account = (function () {
            /**
             * Properties of an Account.
             * @memberof gamedef
             * @interface IAccount
             * @property {string|null} [Account] Account Account
             * @property {number|Long|null} [userID] Account userID
             */
            /**
             * Constructs a new Account.
             * @memberof gamedef
             * @classdesc Represents an Account.
             * @implements IAccount
             * @constructor
             * @param {gamedef.IAccount=} [properties] Properties to set
             */
            function Account(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Account Account.
             * @member {string} Account
             * @memberof gamedef.Account
             * @instance
             */
            Account.prototype.Account = "";
            /**
             * Account userID.
             * @member {number|Long} userID
             * @memberof gamedef.Account
             * @instance
             */
            Account.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * Creates a new Account instance using the specified properties.
             * @function create
             * @memberof gamedef.Account
             * @static
             * @param {gamedef.IAccount=} [properties] Properties to set
             * @returns {gamedef.Account} Account instance
             */
            Account.create = function create(properties) {
                return new Account(properties);
            };
            /**
             * Encodes the specified Account message. Does not implicitly {@link gamedef.Account.verify|verify} messages.
             * @function encode
             * @memberof gamedef.Account
             * @static
             * @param {gamedef.IAccount} message Account message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Account.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Account != null && message.hasOwnProperty("Account"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.Account);
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint64(message.userID);
                return writer;
            };
            /**
             * Encodes the specified Account message, length delimited. Does not implicitly {@link gamedef.Account.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.Account
             * @static
             * @param {gamedef.IAccount} message Account message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Account.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an Account message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.Account
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.Account} Account
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Account.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.Account();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.Account = reader.string();
                            break;
                        case 2:
                            message.userID = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an Account message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.Account
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.Account} Account
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Account.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an Account message.
             * @function verify
             * @memberof gamedef.Account
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Account.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Account != null && message.hasOwnProperty("Account"))
                    if (!$util.isString(message.Account))
                        return "Account: string expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                return null;
            };
            /**
             * Creates an Account message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.Account
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.Account} Account
             */
            Account.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.Account)
                    return object;
                var message = new $root.gamedef.Account();
                if (object.Account != null)
                    message.Account = String(object.Account);
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                return message;
            };
            /**
             * Creates a plain object from an Account message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.Account
             * @static
             * @param {gamedef.Account} message Account
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Account.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Account = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                }
                if (message.Account != null && message.hasOwnProperty("Account"))
                    object.Account = message.Account;
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                return object;
            };
            /**
             * Converts this Account to JSON.
             * @function toJSON
             * @memberof gamedef.Account
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Account.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Account;
        })();
        gamedef.ExtraAccountInfo = (function () {
            /**
             * Properties of an ExtraAccountInfo.
             * @memberof gamedef
             * @interface IExtraAccountInfo
             * @property {number|null} [accountType] ExtraAccountInfo accountType
             * @property {number|null} [channel] ExtraAccountInfo channel
             * @property {number|null} [platform] ExtraAccountInfo platform
             * @property {string|null} [ip] ExtraAccountInfo ip
             * @property {string|null} [account] ExtraAccountInfo account
             */
            /**
             * Constructs a new ExtraAccountInfo.
             * @memberof gamedef
             * @classdesc Represents an ExtraAccountInfo.
             * @implements IExtraAccountInfo
             * @constructor
             * @param {gamedef.IExtraAccountInfo=} [properties] Properties to set
             */
            function ExtraAccountInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * ExtraAccountInfo accountType.
             * @member {number} accountType
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             */
            ExtraAccountInfo.prototype.accountType = 0;
            /**
             * ExtraAccountInfo channel.
             * @member {number} channel
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             */
            ExtraAccountInfo.prototype.channel = 0;
            /**
             * ExtraAccountInfo platform.
             * @member {number} platform
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             */
            ExtraAccountInfo.prototype.platform = 0;
            /**
             * ExtraAccountInfo ip.
             * @member {string} ip
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             */
            ExtraAccountInfo.prototype.ip = "";
            /**
             * ExtraAccountInfo account.
             * @member {string} account
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             */
            ExtraAccountInfo.prototype.account = "";
            /**
             * Creates a new ExtraAccountInfo instance using the specified properties.
             * @function create
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {gamedef.IExtraAccountInfo=} [properties] Properties to set
             * @returns {gamedef.ExtraAccountInfo} ExtraAccountInfo instance
             */
            ExtraAccountInfo.create = function create(properties) {
                return new ExtraAccountInfo(properties);
            };
            /**
             * Encodes the specified ExtraAccountInfo message. Does not implicitly {@link gamedef.ExtraAccountInfo.verify|verify} messages.
             * @function encode
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {gamedef.IExtraAccountInfo} message ExtraAccountInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraAccountInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.accountType);
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.channel);
                if (message.platform != null && message.hasOwnProperty("platform"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.platform);
                if (message.ip != null && message.hasOwnProperty("ip"))
                    writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.ip);
                if (message.account != null && message.hasOwnProperty("account"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.account);
                return writer;
            };
            /**
             * Encodes the specified ExtraAccountInfo message, length delimited. Does not implicitly {@link gamedef.ExtraAccountInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {gamedef.IExtraAccountInfo} message ExtraAccountInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExtraAccountInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an ExtraAccountInfo message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.ExtraAccountInfo} ExtraAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraAccountInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.ExtraAccountInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.accountType = reader.uint32();
                            break;
                        case 2:
                            message.channel = reader.uint32();
                            break;
                        case 3:
                            message.platform = reader.uint32();
                            break;
                        case 4:
                            message.ip = reader.string();
                            break;
                        case 5:
                            message.account = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an ExtraAccountInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.ExtraAccountInfo} ExtraAccountInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExtraAccountInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an ExtraAccountInfo message.
             * @function verify
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExtraAccountInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    if (!$util.isInteger(message.accountType))
                        return "accountType: integer expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isInteger(message.channel))
                        return "channel: integer expected";
                if (message.platform != null && message.hasOwnProperty("platform"))
                    if (!$util.isInteger(message.platform))
                        return "platform: integer expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                if (message.account != null && message.hasOwnProperty("account"))
                    if (!$util.isString(message.account))
                        return "account: string expected";
                return null;
            };
            /**
             * Creates an ExtraAccountInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.ExtraAccountInfo} ExtraAccountInfo
             */
            ExtraAccountInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.ExtraAccountInfo)
                    return object;
                var message = new $root.gamedef.ExtraAccountInfo();
                if (object.accountType != null)
                    message.accountType = object.accountType >>> 0;
                if (object.channel != null)
                    message.channel = object.channel >>> 0;
                if (object.platform != null)
                    message.platform = object.platform >>> 0;
                if (object.ip != null)
                    message.ip = String(object.ip);
                if (object.account != null)
                    message.account = String(object.account);
                return message;
            };
            /**
             * Creates a plain object from an ExtraAccountInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.ExtraAccountInfo
             * @static
             * @param {gamedef.ExtraAccountInfo} message ExtraAccountInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExtraAccountInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accountType = 0;
                    object.channel = 0;
                    object.platform = 0;
                    object.ip = "";
                    object.account = "";
                }
                if (message.accountType != null && message.hasOwnProperty("accountType"))
                    object.accountType = message.accountType;
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.platform != null && message.hasOwnProperty("platform"))
                    object.platform = message.platform;
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                if (message.account != null && message.hasOwnProperty("account"))
                    object.account = message.account;
                return object;
            };
            /**
             * Converts this ExtraAccountInfo to JSON.
             * @function toJSON
             * @memberof gamedef.ExtraAccountInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExtraAccountInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return ExtraAccountInfo;
        })();
        gamedef.User = (function () {
            /**
             * Properties of a User.
             * @memberof gamedef
             * @interface IUser
             * @property {number|Long|null} [userID] User userID
             * @property {string|null} [nickname] User nickname
             * @property {number|null} [sexID] User sexID
             * @property {number|null} [fightGeneralID] User fightGeneralID
             */
            /**
             * Constructs a new User.
             * @memberof gamedef
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {gamedef.IUser=} [properties] Properties to set
             */
            function User(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * User userID.
             * @member {number|Long} userID
             * @memberof gamedef.User
             * @instance
             */
            User.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * User nickname.
             * @member {string} nickname
             * @memberof gamedef.User
             * @instance
             */
            User.prototype.nickname = "";
            /**
             * User sexID.
             * @member {number} sexID
             * @memberof gamedef.User
             * @instance
             */
            User.prototype.sexID = 0;
            /**
             * User fightGeneralID.
             * @member {number} fightGeneralID
             * @memberof gamedef.User
             * @instance
             */
            User.prototype.fightGeneralID = 0;
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof gamedef.User
             * @static
             * @param {gamedef.IUser=} [properties] Properties to set
             * @returns {gamedef.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
            /**
             * Encodes the specified User message. Does not implicitly {@link gamedef.User.verify|verify} messages.
             * @function encode
             * @memberof gamedef.User
             * @static
             * @param {gamedef.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.userID);
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.nickname);
                if (message.sexID != null && message.hasOwnProperty("sexID"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.sexID);
                if (message.fightGeneralID != null && message.hasOwnProperty("fightGeneralID"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.fightGeneralID);
                return writer;
            };
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link gamedef.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.User
             * @static
             * @param {gamedef.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.userID = reader.uint64();
                            break;
                        case 2:
                            message.nickname = reader.string();
                            break;
                        case 3:
                            message.sexID = reader.uint32();
                            break;
                        case 4:
                            message.fightGeneralID = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a User message.
             * @function verify
             * @memberof gamedef.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    if (!$util.isString(message.nickname))
                        return "nickname: string expected";
                if (message.sexID != null && message.hasOwnProperty("sexID"))
                    if (!$util.isInteger(message.sexID))
                        return "sexID: integer expected";
                if (message.fightGeneralID != null && message.hasOwnProperty("fightGeneralID"))
                    if (!$util.isInteger(message.fightGeneralID))
                        return "fightGeneralID: integer expected";
                return null;
            };
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.User)
                    return object;
                var message = new $root.gamedef.User();
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.nickname != null)
                    message.nickname = String(object.nickname);
                if (object.sexID != null)
                    message.sexID = object.sexID >>> 0;
                if (object.fightGeneralID != null)
                    message.fightGeneralID = object.fightGeneralID >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.User
             * @static
             * @param {gamedef.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    object.nickname = "";
                    object.sexID = 0;
                    object.fightGeneralID = 0;
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.nickname != null && message.hasOwnProperty("nickname"))
                    object.nickname = message.nickname;
                if (message.sexID != null && message.hasOwnProperty("sexID"))
                    object.sexID = message.sexID;
                if (message.fightGeneralID != null && message.hasOwnProperty("fightGeneralID"))
                    object.fightGeneralID = message.fightGeneralID;
                return object;
            };
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof gamedef.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return User;
        })();
        gamedef.Individual = (function () {
            /**
             * Properties of an Individual.
             * @memberof gamedef
             * @interface IIndividual
             * @property {number|null} [hp] Individual hp
             * @property {number|null} [attack] Individual attack
             * @property {number|null} [defense] Individual defense
             * @property {number|null} [spAttack] Individual spAttack
             * @property {number|null} [spDefense] Individual spDefense
             * @property {number|null} [speed] Individual speed
             */
            /**
             * Constructs a new Individual.
             * @memberof gamedef
             * @classdesc Represents an Individual.
             * @implements IIndividual
             * @constructor
             * @param {gamedef.IIndividual=} [properties] Properties to set
             */
            function Individual(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Individual hp.
             * @member {number} hp
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.hp = 0;
            /**
             * Individual attack.
             * @member {number} attack
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.attack = 0;
            /**
             * Individual defense.
             * @member {number} defense
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.defense = 0;
            /**
             * Individual spAttack.
             * @member {number} spAttack
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.spAttack = 0;
            /**
             * Individual spDefense.
             * @member {number} spDefense
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.spDefense = 0;
            /**
             * Individual speed.
             * @member {number} speed
             * @memberof gamedef.Individual
             * @instance
             */
            Individual.prototype.speed = 0;
            /**
             * Creates a new Individual instance using the specified properties.
             * @function create
             * @memberof gamedef.Individual
             * @static
             * @param {gamedef.IIndividual=} [properties] Properties to set
             * @returns {gamedef.Individual} Individual instance
             */
            Individual.create = function create(properties) {
                return new Individual(properties);
            };
            /**
             * Encodes the specified Individual message. Does not implicitly {@link gamedef.Individual.verify|verify} messages.
             * @function encode
             * @memberof gamedef.Individual
             * @static
             * @param {gamedef.IIndividual} message Individual message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Individual.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.hp != null && message.hasOwnProperty("hp"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.hp);
                if (message.attack != null && message.hasOwnProperty("attack"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.attack);
                if (message.defense != null && message.hasOwnProperty("defense"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.defense);
                if (message.spAttack != null && message.hasOwnProperty("spAttack"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.spAttack);
                if (message.spDefense != null && message.hasOwnProperty("spDefense"))
                    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.spDefense);
                if (message.speed != null && message.hasOwnProperty("speed"))
                    writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.speed);
                return writer;
            };
            /**
             * Encodes the specified Individual message, length delimited. Does not implicitly {@link gamedef.Individual.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.Individual
             * @static
             * @param {gamedef.IIndividual} message Individual message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Individual.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an Individual message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.Individual
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.Individual} Individual
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Individual.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.Individual();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.hp = reader.int32();
                            break;
                        case 2:
                            message.attack = reader.int32();
                            break;
                        case 3:
                            message.defense = reader.int32();
                            break;
                        case 4:
                            message.spAttack = reader.int32();
                            break;
                        case 5:
                            message.spDefense = reader.int32();
                            break;
                        case 6:
                            message.speed = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an Individual message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.Individual
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.Individual} Individual
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Individual.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an Individual message.
             * @function verify
             * @memberof gamedef.Individual
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Individual.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.hp != null && message.hasOwnProperty("hp"))
                    if (!$util.isInteger(message.hp))
                        return "hp: integer expected";
                if (message.attack != null && message.hasOwnProperty("attack"))
                    if (!$util.isInteger(message.attack))
                        return "attack: integer expected";
                if (message.defense != null && message.hasOwnProperty("defense"))
                    if (!$util.isInteger(message.defense))
                        return "defense: integer expected";
                if (message.spAttack != null && message.hasOwnProperty("spAttack"))
                    if (!$util.isInteger(message.spAttack))
                        return "spAttack: integer expected";
                if (message.spDefense != null && message.hasOwnProperty("spDefense"))
                    if (!$util.isInteger(message.spDefense))
                        return "spDefense: integer expected";
                if (message.speed != null && message.hasOwnProperty("speed"))
                    if (!$util.isInteger(message.speed))
                        return "speed: integer expected";
                return null;
            };
            /**
             * Creates an Individual message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.Individual
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.Individual} Individual
             */
            Individual.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.Individual)
                    return object;
                var message = new $root.gamedef.Individual();
                if (object.hp != null)
                    message.hp = object.hp | 0;
                if (object.attack != null)
                    message.attack = object.attack | 0;
                if (object.defense != null)
                    message.defense = object.defense | 0;
                if (object.spAttack != null)
                    message.spAttack = object.spAttack | 0;
                if (object.spDefense != null)
                    message.spDefense = object.spDefense | 0;
                if (object.speed != null)
                    message.speed = object.speed | 0;
                return message;
            };
            /**
             * Creates a plain object from an Individual message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.Individual
             * @static
             * @param {gamedef.Individual} message Individual
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Individual.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.hp = 0;
                    object.attack = 0;
                    object.defense = 0;
                    object.spAttack = 0;
                    object.spDefense = 0;
                    object.speed = 0;
                }
                if (message.hp != null && message.hasOwnProperty("hp"))
                    object.hp = message.hp;
                if (message.attack != null && message.hasOwnProperty("attack"))
                    object.attack = message.attack;
                if (message.defense != null && message.hasOwnProperty("defense"))
                    object.defense = message.defense;
                if (message.spAttack != null && message.hasOwnProperty("spAttack"))
                    object.spAttack = message.spAttack;
                if (message.spDefense != null && message.hasOwnProperty("spDefense"))
                    object.spDefense = message.spDefense;
                if (message.speed != null && message.hasOwnProperty("speed"))
                    object.speed = message.speed;
                return object;
            };
            /**
             * Converts this Individual to JSON.
             * @function toJSON
             * @memberof gamedef.Individual
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Individual.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Individual;
        })();
        gamedef.General = (function () {
            /**
             * Properties of a General.
             * @memberof gamedef
             * @interface IGeneral
             * @property {number|Long|null} [pkID] General pkID
             * @property {number|null} [generalID] General generalID
             * @property {gamedef.IIndividual|null} [individual] General individual
             * @property {gamedef.IIndividual|null} [effort] General effort
             * @property {Array.<number>|null} [skills] General skills
             * @property {number|null} [level] General level
             * @property {number|null} [exp] General exp
             */
            /**
             * Constructs a new General.
             * @memberof gamedef
             * @classdesc Represents a General.
             * @implements IGeneral
             * @constructor
             * @param {gamedef.IGeneral=} [properties] Properties to set
             */
            function General(properties) {
                this.skills = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * General pkID.
             * @member {number|Long} pkID
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.pkID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * General generalID.
             * @member {number} generalID
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.generalID = 0;
            /**
             * General individual.
             * @member {gamedef.IIndividual|null|undefined} individual
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.individual = null;
            /**
             * General effort.
             * @member {gamedef.IIndividual|null|undefined} effort
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.effort = null;
            /**
             * General skills.
             * @member {Array.<number>} skills
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.skills = $util.emptyArray;
            /**
             * General level.
             * @member {number} level
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.level = 0;
            /**
             * General exp.
             * @member {number} exp
             * @memberof gamedef.General
             * @instance
             */
            General.prototype.exp = 0;
            /**
             * Creates a new General instance using the specified properties.
             * @function create
             * @memberof gamedef.General
             * @static
             * @param {gamedef.IGeneral=} [properties] Properties to set
             * @returns {gamedef.General} General instance
             */
            General.create = function create(properties) {
                return new General(properties);
            };
            /**
             * Encodes the specified General message. Does not implicitly {@link gamedef.General.verify|verify} messages.
             * @function encode
             * @memberof gamedef.General
             * @static
             * @param {gamedef.IGeneral} message General message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            General.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.pkID);
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.generalID);
                if (message.individual != null && message.hasOwnProperty("individual"))
                    $root.gamedef.Individual.encode(message.individual, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.effort != null && message.hasOwnProperty("effort"))
                    $root.gamedef.Individual.encode(message.effort, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                if (message.skills != null && message.skills.length) {
                    writer.uint32(/* id 5, wireType 2 =*/ 42).fork();
                    for (var i = 0; i < message.skills.length; ++i)
                        writer.uint32(message.skills[i]);
                    writer.ldelim();
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 6, wireType 0 =*/ 48).uint32(message.level);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.exp);
                return writer;
            };
            /**
             * Encodes the specified General message, length delimited. Does not implicitly {@link gamedef.General.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.General
             * @static
             * @param {gamedef.IGeneral} message General message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            General.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a General message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.General
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.General} General
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            General.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.General();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.pkID = reader.uint64();
                            break;
                        case 2:
                            message.generalID = reader.uint32();
                            break;
                        case 3:
                            message.individual = $root.gamedef.Individual.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.effort = $root.gamedef.Individual.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.skills && message.skills.length))
                                message.skills = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.skills.push(reader.uint32());
                            }
                            else
                                message.skills.push(reader.uint32());
                            break;
                        case 6:
                            message.level = reader.uint32();
                            break;
                        case 7:
                            message.exp = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a General message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.General
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.General} General
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            General.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a General message.
             * @function verify
             * @memberof gamedef.General
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            General.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (!$util.isInteger(message.pkID) && !(message.pkID && $util.isInteger(message.pkID.low) && $util.isInteger(message.pkID.high)))
                        return "pkID: integer|Long expected";
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    if (!$util.isInteger(message.generalID))
                        return "generalID: integer expected";
                if (message.individual != null && message.hasOwnProperty("individual")) {
                    var error = $root.gamedef.Individual.verify(message.individual);
                    if (error)
                        return "individual." + error;
                }
                if (message.effort != null && message.hasOwnProperty("effort")) {
                    var error = $root.gamedef.Individual.verify(message.effort);
                    if (error)
                        return "effort." + error;
                }
                if (message.skills != null && message.hasOwnProperty("skills")) {
                    if (!Array.isArray(message.skills))
                        return "skills: array expected";
                    for (var i = 0; i < message.skills.length; ++i)
                        if (!$util.isInteger(message.skills[i]))
                            return "skills: integer[] expected";
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp))
                        return "exp: integer expected";
                return null;
            };
            /**
             * Creates a General message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.General
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.General} General
             */
            General.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.General)
                    return object;
                var message = new $root.gamedef.General();
                if (object.pkID != null)
                    if ($util.Long)
                        (message.pkID = $util.Long.fromValue(object.pkID)).unsigned = true;
                    else if (typeof object.pkID === "string")
                        message.pkID = parseInt(object.pkID, 10);
                    else if (typeof object.pkID === "number")
                        message.pkID = object.pkID;
                    else if (typeof object.pkID === "object")
                        message.pkID = new $util.LongBits(object.pkID.low >>> 0, object.pkID.high >>> 0).toNumber(true);
                if (object.generalID != null)
                    message.generalID = object.generalID >>> 0;
                if (object.individual != null) {
                    if (typeof object.individual !== "object")
                        throw TypeError(".gamedef.General.individual: object expected");
                    message.individual = $root.gamedef.Individual.fromObject(object.individual);
                }
                if (object.effort != null) {
                    if (typeof object.effort !== "object")
                        throw TypeError(".gamedef.General.effort: object expected");
                    message.effort = $root.gamedef.Individual.fromObject(object.effort);
                }
                if (object.skills) {
                    if (!Array.isArray(object.skills))
                        throw TypeError(".gamedef.General.skills: array expected");
                    message.skills = [];
                    for (var i = 0; i < object.skills.length; ++i)
                        message.skills[i] = object.skills[i] >>> 0;
                }
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.exp != null)
                    message.exp = object.exp | 0;
                return message;
            };
            /**
             * Creates a plain object from a General message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.General
             * @static
             * @param {gamedef.General} message General
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            General.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.skills = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.pkID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.pkID = options.longs === String ? "0" : 0;
                    object.generalID = 0;
                    object.individual = null;
                    object.effort = null;
                    object.level = 0;
                    object.exp = 0;
                }
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (typeof message.pkID === "number")
                        object.pkID = options.longs === String ? String(message.pkID) : message.pkID;
                    else
                        object.pkID = options.longs === String ? $util.Long.prototype.toString.call(message.pkID) : options.longs === Number ? new $util.LongBits(message.pkID.low >>> 0, message.pkID.high >>> 0).toNumber(true) : message.pkID;
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    object.generalID = message.generalID;
                if (message.individual != null && message.hasOwnProperty("individual"))
                    object.individual = $root.gamedef.Individual.toObject(message.individual, options);
                if (message.effort != null && message.hasOwnProperty("effort"))
                    object.effort = $root.gamedef.Individual.toObject(message.effort, options);
                if (message.skills && message.skills.length) {
                    object.skills = [];
                    for (var j = 0; j < message.skills.length; ++j)
                        object.skills[j] = message.skills[j];
                }
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                return object;
            };
            /**
             * Converts this General to JSON.
             * @function toJSON
             * @memberof gamedef.General
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            General.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return General;
        })();
        gamedef.Item = (function () {
            /**
             * Properties of an Item.
             * @memberof gamedef
             * @interface IItem
             * @property {number|Long|null} [pkID] Item pkID
             * @property {number|null} [itemID] Item itemID
             * @property {number|null} [num] Item num
             */
            /**
             * Constructs a new Item.
             * @memberof gamedef
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {gamedef.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Item pkID.
             * @member {number|Long} pkID
             * @memberof gamedef.Item
             * @instance
             */
            Item.prototype.pkID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * Item itemID.
             * @member {number} itemID
             * @memberof gamedef.Item
             * @instance
             */
            Item.prototype.itemID = 0;
            /**
             * Item num.
             * @member {number} num
             * @memberof gamedef.Item
             * @instance
             */
            Item.prototype.num = 0;
            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof gamedef.Item
             * @static
             * @param {gamedef.IItem=} [properties] Properties to set
             * @returns {gamedef.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };
            /**
             * Encodes the specified Item message. Does not implicitly {@link gamedef.Item.verify|verify} messages.
             * @function encode
             * @memberof gamedef.Item
             * @static
             * @param {gamedef.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.pkID);
                if (message.itemID != null && message.hasOwnProperty("itemID"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.itemID);
                if (message.num != null && message.hasOwnProperty("num"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.num);
                return writer;
            };
            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link gamedef.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.Item
             * @static
             * @param {gamedef.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.pkID = reader.uint64();
                            break;
                        case 2:
                            message.itemID = reader.uint32();
                            break;
                        case 3:
                            message.num = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies an Item message.
             * @function verify
             * @memberof gamedef.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (!$util.isInteger(message.pkID) && !(message.pkID && $util.isInteger(message.pkID.low) && $util.isInteger(message.pkID.high)))
                        return "pkID: integer|Long expected";
                if (message.itemID != null && message.hasOwnProperty("itemID"))
                    if (!$util.isInteger(message.itemID))
                        return "itemID: integer expected";
                if (message.num != null && message.hasOwnProperty("num"))
                    if (!$util.isInteger(message.num))
                        return "num: integer expected";
                return null;
            };
            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.Item)
                    return object;
                var message = new $root.gamedef.Item();
                if (object.pkID != null)
                    if ($util.Long)
                        (message.pkID = $util.Long.fromValue(object.pkID)).unsigned = true;
                    else if (typeof object.pkID === "string")
                        message.pkID = parseInt(object.pkID, 10);
                    else if (typeof object.pkID === "number")
                        message.pkID = object.pkID;
                    else if (typeof object.pkID === "object")
                        message.pkID = new $util.LongBits(object.pkID.low >>> 0, object.pkID.high >>> 0).toNumber(true);
                if (object.itemID != null)
                    message.itemID = object.itemID >>> 0;
                if (object.num != null)
                    message.num = object.num >>> 0;
                return message;
            };
            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.Item
             * @static
             * @param {gamedef.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.pkID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.pkID = options.longs === String ? "0" : 0;
                    object.itemID = 0;
                    object.num = 0;
                }
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (typeof message.pkID === "number")
                        object.pkID = options.longs === String ? String(message.pkID) : message.pkID;
                    else
                        object.pkID = options.longs === String ? $util.Long.prototype.toString.call(message.pkID) : options.longs === Number ? new $util.LongBits(message.pkID.low >>> 0, message.pkID.high >>> 0).toNumber(true) : message.pkID;
                if (message.itemID != null && message.hasOwnProperty("itemID"))
                    object.itemID = message.itemID;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                return object;
            };
            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof gamedef.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Item;
        })();
        gamedef.UserData = (function () {
            /**
             * Properties of a UserData.
             * @memberof gamedef
             * @interface IUserData
             * @property {gamedef.IUser|null} [user] UserData user
             * @property {Array.<gamedef.IGeneral>|null} [generals] UserData generals
             * @property {Array.<gamedef.IItem>|null} [items] UserData items
             */
            /**
             * Constructs a new UserData.
             * @memberof gamedef
             * @classdesc Represents a UserData.
             * @implements IUserData
             * @constructor
             * @param {gamedef.IUserData=} [properties] Properties to set
             */
            function UserData(properties) {
                this.generals = [];
                this.items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * UserData user.
             * @member {gamedef.IUser|null|undefined} user
             * @memberof gamedef.UserData
             * @instance
             */
            UserData.prototype.user = null;
            /**
             * UserData generals.
             * @member {Array.<gamedef.IGeneral>} generals
             * @memberof gamedef.UserData
             * @instance
             */
            UserData.prototype.generals = $util.emptyArray;
            /**
             * UserData items.
             * @member {Array.<gamedef.IItem>} items
             * @memberof gamedef.UserData
             * @instance
             */
            UserData.prototype.items = $util.emptyArray;
            /**
             * Creates a new UserData instance using the specified properties.
             * @function create
             * @memberof gamedef.UserData
             * @static
             * @param {gamedef.IUserData=} [properties] Properties to set
             * @returns {gamedef.UserData} UserData instance
             */
            UserData.create = function create(properties) {
                return new UserData(properties);
            };
            /**
             * Encodes the specified UserData message. Does not implicitly {@link gamedef.UserData.verify|verify} messages.
             * @function encode
             * @memberof gamedef.UserData
             * @static
             * @param {gamedef.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.hasOwnProperty("user"))
                    $root.gamedef.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                if (message.generals != null && message.generals.length)
                    for (var i = 0; i < message.generals.length; ++i)
                        $root.gamedef.General.encode(message.generals[i], writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.items != null && message.items.length)
                    for (var i = 0; i < message.items.length; ++i)
                        $root.gamedef.Item.encode(message.items[i], writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified UserData message, length delimited. Does not implicitly {@link gamedef.UserData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.UserData
             * @static
             * @param {gamedef.IUserData} message UserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a UserData message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.UserData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.user = $root.gamedef.User.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.generals && message.generals.length))
                                message.generals = [];
                            message.generals.push($root.gamedef.General.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push($root.gamedef.Item.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a UserData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.UserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.UserData} UserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a UserData message.
             * @function verify
             * @memberof gamedef.UserData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.gamedef.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.generals != null && message.hasOwnProperty("generals")) {
                    if (!Array.isArray(message.generals))
                        return "generals: array expected";
                    for (var i = 0; i < message.generals.length; ++i) {
                        var error = $root.gamedef.General.verify(message.generals[i]);
                        if (error)
                            return "generals." + error;
                    }
                }
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (var i = 0; i < message.items.length; ++i) {
                        var error = $root.gamedef.Item.verify(message.items[i]);
                        if (error)
                            return "items." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a UserData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.UserData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.UserData} UserData
             */
            UserData.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.UserData)
                    return object;
                var message = new $root.gamedef.UserData();
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".gamedef.UserData.user: object expected");
                    message.user = $root.gamedef.User.fromObject(object.user);
                }
                if (object.generals) {
                    if (!Array.isArray(object.generals))
                        throw TypeError(".gamedef.UserData.generals: array expected");
                    message.generals = [];
                    for (var i = 0; i < object.generals.length; ++i) {
                        if (typeof object.generals[i] !== "object")
                            throw TypeError(".gamedef.UserData.generals: object expected");
                        message.generals[i] = $root.gamedef.General.fromObject(object.generals[i]);
                    }
                }
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".gamedef.UserData.items: array expected");
                    message.items = [];
                    for (var i = 0; i < object.items.length; ++i) {
                        if (typeof object.items[i] !== "object")
                            throw TypeError(".gamedef.UserData.items: object expected");
                        message.items[i] = $root.gamedef.Item.fromObject(object.items[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a UserData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.UserData
             * @static
             * @param {gamedef.UserData} message UserData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.generals = [];
                    object.items = [];
                }
                if (options.defaults)
                    object.user = null;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.gamedef.User.toObject(message.user, options);
                if (message.generals && message.generals.length) {
                    object.generals = [];
                    for (var j = 0; j < message.generals.length; ++j)
                        object.generals[j] = $root.gamedef.General.toObject(message.generals[j], options);
                }
                if (message.items && message.items.length) {
                    object.items = [];
                    for (var j = 0; j < message.items.length; ++j)
                        object.items[j] = $root.gamedef.Item.toObject(message.items[j], options);
                }
                return object;
            };
            /**
             * Converts this UserData to JSON.
             * @function toJSON
             * @memberof gamedef.UserData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return UserData;
        })();
        gamedef.Buff = (function () {
            /**
             * Properties of a Buff.
             * @memberof gamedef
             * @interface IBuff
             * @property {gameconf.SkillEffectTyp|null} [buffType] Buff buffType
             * @property {number|null} [last] Buff last
             * @property {number|null} [level] Buff level
             */
            /**
             * Constructs a new Buff.
             * @memberof gamedef
             * @classdesc Represents a Buff.
             * @implements IBuff
             * @constructor
             * @param {gamedef.IBuff=} [properties] Properties to set
             */
            function Buff(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Buff buffType.
             * @member {gameconf.SkillEffectTyp} buffType
             * @memberof gamedef.Buff
             * @instance
             */
            Buff.prototype.buffType = 0;
            /**
             * Buff last.
             * @member {number} last
             * @memberof gamedef.Buff
             * @instance
             */
            Buff.prototype.last = 0;
            /**
             * Buff level.
             * @member {number} level
             * @memberof gamedef.Buff
             * @instance
             */
            Buff.prototype.level = 0;
            /**
             * Creates a new Buff instance using the specified properties.
             * @function create
             * @memberof gamedef.Buff
             * @static
             * @param {gamedef.IBuff=} [properties] Properties to set
             * @returns {gamedef.Buff} Buff instance
             */
            Buff.create = function create(properties) {
                return new Buff(properties);
            };
            /**
             * Encodes the specified Buff message. Does not implicitly {@link gamedef.Buff.verify|verify} messages.
             * @function encode
             * @memberof gamedef.Buff
             * @static
             * @param {gamedef.IBuff} message Buff message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Buff.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.buffType != null && message.hasOwnProperty("buffType"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.buffType);
                if (message.last != null && message.hasOwnProperty("last"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.last);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.level);
                return writer;
            };
            /**
             * Encodes the specified Buff message, length delimited. Does not implicitly {@link gamedef.Buff.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.Buff
             * @static
             * @param {gamedef.IBuff} message Buff message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Buff.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a Buff message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.Buff
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.Buff} Buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Buff.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.Buff();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.buffType = reader.int32();
                            break;
                        case 2:
                            message.last = reader.int32();
                            break;
                        case 3:
                            message.level = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a Buff message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.Buff
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.Buff} Buff
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Buff.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a Buff message.
             * @function verify
             * @memberof gamedef.Buff
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Buff.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.buffType != null && message.hasOwnProperty("buffType"))
                    switch (message.buffType) {
                        default:
                            return "buffType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                    }
                if (message.last != null && message.hasOwnProperty("last"))
                    if (!$util.isInteger(message.last))
                        return "last: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                return null;
            };
            /**
             * Creates a Buff message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.Buff
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.Buff} Buff
             */
            Buff.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.Buff)
                    return object;
                var message = new $root.gamedef.Buff();
                switch (object.buffType) {
                    case "SETInvliad":
                    case 0:
                        message.buffType = 0;
                        break;
                    case "SETFire":
                    case 1:
                        message.buffType = 1;
                        break;
                    case "SETAttack":
                    case 2:
                        message.buffType = 2;
                        break;
                }
                if (object.last != null)
                    message.last = object.last | 0;
                if (object.level != null)
                    message.level = object.level | 0;
                return message;
            };
            /**
             * Creates a plain object from a Buff message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.Buff
             * @static
             * @param {gamedef.Buff} message Buff
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Buff.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.buffType = options.enums === String ? "SETInvliad" : 0;
                    object.last = 0;
                    object.level = 0;
                }
                if (message.buffType != null && message.hasOwnProperty("buffType"))
                    object.buffType = options.enums === String ? $root.gameconf.SkillEffectTyp[message.buffType] : message.buffType;
                if (message.last != null && message.hasOwnProperty("last"))
                    object.last = message.last;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                return object;
            };
            /**
             * Converts this Buff to JSON.
             * @function toJSON
             * @memberof gamedef.Buff
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Buff.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Buff;
        })();
        gamedef.GameGeneral = (function () {
            /**
             * Properties of a GameGeneral.
             * @memberof gamedef
             * @interface IGameGeneral
             * @property {number|null} [generalID] GameGeneral generalID
             * @property {number|null} [level] GameGeneral level
             * @property {number|null} [baseHp] GameGeneral baseHp
             * @property {number|null} [baseAttack] GameGeneral baseAttack
             * @property {number|null} [baseDefense] GameGeneral baseDefense
             * @property {number|null} [baseSpAttack] GameGeneral baseSpAttack
             * @property {number|null} [baseSpDefense] GameGeneral baseSpDefense
             * @property {number|null} [baseSpeed] GameGeneral baseSpeed
             * @property {number|null} [curHP] GameGeneral curHP
             * @property {Array.<gamedef.IBuff>|null} [buffs] GameGeneral buffs
             * @property {Array.<number>|null} [skills] GameGeneral skills
             * @property {number|Long|null} [userID] GameGeneral userID
             * @property {number|Long|null} [pkID] GameGeneral pkID
             */
            /**
             * Constructs a new GameGeneral.
             * @memberof gamedef
             * @classdesc Represents a GameGeneral.
             * @implements IGameGeneral
             * @constructor
             * @param {gamedef.IGameGeneral=} [properties] Properties to set
             */
            function GameGeneral(properties) {
                this.buffs = [];
                this.skills = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * GameGeneral generalID.
             * @member {number} generalID
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.generalID = 0;
            /**
             * GameGeneral level.
             * @member {number} level
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.level = 0;
            /**
             * GameGeneral baseHp.
             * @member {number} baseHp
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseHp = 0;
            /**
             * GameGeneral baseAttack.
             * @member {number} baseAttack
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseAttack = 0;
            /**
             * GameGeneral baseDefense.
             * @member {number} baseDefense
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseDefense = 0;
            /**
             * GameGeneral baseSpAttack.
             * @member {number} baseSpAttack
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseSpAttack = 0;
            /**
             * GameGeneral baseSpDefense.
             * @member {number} baseSpDefense
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseSpDefense = 0;
            /**
             * GameGeneral baseSpeed.
             * @member {number} baseSpeed
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.baseSpeed = 0;
            /**
             * GameGeneral curHP.
             * @member {number} curHP
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.curHP = 0;
            /**
             * GameGeneral buffs.
             * @member {Array.<gamedef.IBuff>} buffs
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.buffs = $util.emptyArray;
            /**
             * GameGeneral skills.
             * @member {Array.<number>} skills
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.skills = $util.emptyArray;
            /**
             * GameGeneral userID.
             * @member {number|Long} userID
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * GameGeneral pkID.
             * @member {number|Long} pkID
             * @memberof gamedef.GameGeneral
             * @instance
             */
            GameGeneral.prototype.pkID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * Creates a new GameGeneral instance using the specified properties.
             * @function create
             * @memberof gamedef.GameGeneral
             * @static
             * @param {gamedef.IGameGeneral=} [properties] Properties to set
             * @returns {gamedef.GameGeneral} GameGeneral instance
             */
            GameGeneral.create = function create(properties) {
                return new GameGeneral(properties);
            };
            /**
             * Encodes the specified GameGeneral message. Does not implicitly {@link gamedef.GameGeneral.verify|verify} messages.
             * @function encode
             * @memberof gamedef.GameGeneral
             * @static
             * @param {gamedef.IGameGeneral} message GameGeneral message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameGeneral.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.generalID);
                if (message.level != null && message.hasOwnProperty("level"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.level);
                if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.baseHp);
                if (message.baseAttack != null && message.hasOwnProperty("baseAttack"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.baseAttack);
                if (message.baseDefense != null && message.hasOwnProperty("baseDefense"))
                    writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.baseDefense);
                if (message.baseSpAttack != null && message.hasOwnProperty("baseSpAttack"))
                    writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.baseSpAttack);
                if (message.baseSpDefense != null && message.hasOwnProperty("baseSpDefense"))
                    writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.baseSpDefense);
                if (message.baseSpeed != null && message.hasOwnProperty("baseSpeed"))
                    writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.baseSpeed);
                if (message.curHP != null && message.hasOwnProperty("curHP"))
                    writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.curHP);
                if (message.buffs != null && message.buffs.length)
                    for (var i = 0; i < message.buffs.length; ++i)
                        $root.gamedef.Buff.encode(message.buffs[i], writer.uint32(/* id 10, wireType 2 =*/ 82).fork()).ldelim();
                if (message.skills != null && message.skills.length) {
                    writer.uint32(/* id 11, wireType 2 =*/ 90).fork();
                    for (var i = 0; i < message.skills.length; ++i)
                        writer.uint32(message.skills[i]);
                    writer.ldelim();
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 12, wireType 0 =*/ 96).uint64(message.userID);
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    writer.uint32(/* id 13, wireType 0 =*/ 104).uint64(message.pkID);
                return writer;
            };
            /**
             * Encodes the specified GameGeneral message, length delimited. Does not implicitly {@link gamedef.GameGeneral.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.GameGeneral
             * @static
             * @param {gamedef.IGameGeneral} message GameGeneral message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GameGeneral.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a GameGeneral message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.GameGeneral
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.GameGeneral} GameGeneral
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameGeneral.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.GameGeneral();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.generalID = reader.uint32();
                            break;
                        case 2:
                            message.level = reader.uint32();
                            break;
                        case 3:
                            message.baseHp = reader.int32();
                            break;
                        case 4:
                            message.baseAttack = reader.int32();
                            break;
                        case 5:
                            message.baseDefense = reader.int32();
                            break;
                        case 6:
                            message.baseSpAttack = reader.int32();
                            break;
                        case 7:
                            message.baseSpDefense = reader.int32();
                            break;
                        case 8:
                            message.baseSpeed = reader.int32();
                            break;
                        case 9:
                            message.curHP = reader.int32();
                            break;
                        case 10:
                            if (!(message.buffs && message.buffs.length))
                                message.buffs = [];
                            message.buffs.push($root.gamedef.Buff.decode(reader, reader.uint32()));
                            break;
                        case 11:
                            if (!(message.skills && message.skills.length))
                                message.skills = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.skills.push(reader.uint32());
                            }
                            else
                                message.skills.push(reader.uint32());
                            break;
                        case 12:
                            message.userID = reader.uint64();
                            break;
                        case 13:
                            message.pkID = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a GameGeneral message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.GameGeneral
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.GameGeneral} GameGeneral
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GameGeneral.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a GameGeneral message.
             * @function verify
             * @memberof gamedef.GameGeneral
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GameGeneral.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    if (!$util.isInteger(message.generalID))
                        return "generalID: integer expected";
                if (message.level != null && message.hasOwnProperty("level"))
                    if (!$util.isInteger(message.level))
                        return "level: integer expected";
                if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                    if (!$util.isInteger(message.baseHp))
                        return "baseHp: integer expected";
                if (message.baseAttack != null && message.hasOwnProperty("baseAttack"))
                    if (!$util.isInteger(message.baseAttack))
                        return "baseAttack: integer expected";
                if (message.baseDefense != null && message.hasOwnProperty("baseDefense"))
                    if (!$util.isInteger(message.baseDefense))
                        return "baseDefense: integer expected";
                if (message.baseSpAttack != null && message.hasOwnProperty("baseSpAttack"))
                    if (!$util.isInteger(message.baseSpAttack))
                        return "baseSpAttack: integer expected";
                if (message.baseSpDefense != null && message.hasOwnProperty("baseSpDefense"))
                    if (!$util.isInteger(message.baseSpDefense))
                        return "baseSpDefense: integer expected";
                if (message.baseSpeed != null && message.hasOwnProperty("baseSpeed"))
                    if (!$util.isInteger(message.baseSpeed))
                        return "baseSpeed: integer expected";
                if (message.curHP != null && message.hasOwnProperty("curHP"))
                    if (!$util.isInteger(message.curHP))
                        return "curHP: integer expected";
                if (message.buffs != null && message.hasOwnProperty("buffs")) {
                    if (!Array.isArray(message.buffs))
                        return "buffs: array expected";
                    for (var i = 0; i < message.buffs.length; ++i) {
                        var error = $root.gamedef.Buff.verify(message.buffs[i]);
                        if (error)
                            return "buffs." + error;
                    }
                }
                if (message.skills != null && message.hasOwnProperty("skills")) {
                    if (!Array.isArray(message.skills))
                        return "skills: array expected";
                    for (var i = 0; i < message.skills.length; ++i)
                        if (!$util.isInteger(message.skills[i]))
                            return "skills: integer[] expected";
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (!$util.isInteger(message.pkID) && !(message.pkID && $util.isInteger(message.pkID.low) && $util.isInteger(message.pkID.high)))
                        return "pkID: integer|Long expected";
                return null;
            };
            /**
             * Creates a GameGeneral message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.GameGeneral
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.GameGeneral} GameGeneral
             */
            GameGeneral.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.GameGeneral)
                    return object;
                var message = new $root.gamedef.GameGeneral();
                if (object.generalID != null)
                    message.generalID = object.generalID >>> 0;
                if (object.level != null)
                    message.level = object.level >>> 0;
                if (object.baseHp != null)
                    message.baseHp = object.baseHp | 0;
                if (object.baseAttack != null)
                    message.baseAttack = object.baseAttack | 0;
                if (object.baseDefense != null)
                    message.baseDefense = object.baseDefense | 0;
                if (object.baseSpAttack != null)
                    message.baseSpAttack = object.baseSpAttack | 0;
                if (object.baseSpDefense != null)
                    message.baseSpDefense = object.baseSpDefense | 0;
                if (object.baseSpeed != null)
                    message.baseSpeed = object.baseSpeed | 0;
                if (object.curHP != null)
                    message.curHP = object.curHP | 0;
                if (object.buffs) {
                    if (!Array.isArray(object.buffs))
                        throw TypeError(".gamedef.GameGeneral.buffs: array expected");
                    message.buffs = [];
                    for (var i = 0; i < object.buffs.length; ++i) {
                        if (typeof object.buffs[i] !== "object")
                            throw TypeError(".gamedef.GameGeneral.buffs: object expected");
                        message.buffs[i] = $root.gamedef.Buff.fromObject(object.buffs[i]);
                    }
                }
                if (object.skills) {
                    if (!Array.isArray(object.skills))
                        throw TypeError(".gamedef.GameGeneral.skills: array expected");
                    message.skills = [];
                    for (var i = 0; i < object.skills.length; ++i)
                        message.skills[i] = object.skills[i] >>> 0;
                }
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.pkID != null)
                    if ($util.Long)
                        (message.pkID = $util.Long.fromValue(object.pkID)).unsigned = true;
                    else if (typeof object.pkID === "string")
                        message.pkID = parseInt(object.pkID, 10);
                    else if (typeof object.pkID === "number")
                        message.pkID = object.pkID;
                    else if (typeof object.pkID === "object")
                        message.pkID = new $util.LongBits(object.pkID.low >>> 0, object.pkID.high >>> 0).toNumber(true);
                return message;
            };
            /**
             * Creates a plain object from a GameGeneral message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.GameGeneral
             * @static
             * @param {gamedef.GameGeneral} message GameGeneral
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GameGeneral.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.buffs = [];
                    object.skills = [];
                }
                if (options.defaults) {
                    object.generalID = 0;
                    object.level = 0;
                    object.baseHp = 0;
                    object.baseAttack = 0;
                    object.baseDefense = 0;
                    object.baseSpAttack = 0;
                    object.baseSpDefense = 0;
                    object.baseSpeed = 0;
                    object.curHP = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.pkID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.pkID = options.longs === String ? "0" : 0;
                }
                if (message.generalID != null && message.hasOwnProperty("generalID"))
                    object.generalID = message.generalID;
                if (message.level != null && message.hasOwnProperty("level"))
                    object.level = message.level;
                if (message.baseHp != null && message.hasOwnProperty("baseHp"))
                    object.baseHp = message.baseHp;
                if (message.baseAttack != null && message.hasOwnProperty("baseAttack"))
                    object.baseAttack = message.baseAttack;
                if (message.baseDefense != null && message.hasOwnProperty("baseDefense"))
                    object.baseDefense = message.baseDefense;
                if (message.baseSpAttack != null && message.hasOwnProperty("baseSpAttack"))
                    object.baseSpAttack = message.baseSpAttack;
                if (message.baseSpDefense != null && message.hasOwnProperty("baseSpDefense"))
                    object.baseSpDefense = message.baseSpDefense;
                if (message.baseSpeed != null && message.hasOwnProperty("baseSpeed"))
                    object.baseSpeed = message.baseSpeed;
                if (message.curHP != null && message.hasOwnProperty("curHP"))
                    object.curHP = message.curHP;
                if (message.buffs && message.buffs.length) {
                    object.buffs = [];
                    for (var j = 0; j < message.buffs.length; ++j)
                        object.buffs[j] = $root.gamedef.Buff.toObject(message.buffs[j], options);
                }
                if (message.skills && message.skills.length) {
                    object.skills = [];
                    for (var j = 0; j < message.skills.length; ++j)
                        object.skills[j] = message.skills[j];
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.pkID != null && message.hasOwnProperty("pkID"))
                    if (typeof message.pkID === "number")
                        object.pkID = options.longs === String ? String(message.pkID) : message.pkID;
                    else
                        object.pkID = options.longs === String ? $util.Long.prototype.toString.call(message.pkID) : options.longs === Number ? new $util.LongBits(message.pkID.low >>> 0, message.pkID.high >>> 0).toNumber(true) : message.pkID;
                return object;
            };
            /**
             * Converts this GameGeneral to JSON.
             * @function toJSON
             * @memberof gamedef.GameGeneral
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GameGeneral.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return GameGeneral;
        })();
        /**
         * GameStageTyp enum.
         * @name gamedef.GameStageTyp
         * @enum {string}
         * @property {number} GSTInvalid=0 GSTInvalid value
         * @property {number} GSTChoose=1 GSTChoose value
         * @property {number} GSTAction=2 GSTAction value
         */
        gamedef.GameStageTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GSTInvalid"] = 0;
            values[valuesById[1] = "GSTChoose"] = 1;
            values[valuesById[2] = "GSTAction"] = 2;
            return values;
        })();
        /**
         * ChessTyp enum.
         * @name gamedef.ChessTyp
         * @enum {string}
         * @property {number} CTInvalid=0 CTInvalid value
         * @property {number} CTBlank=1 CTBlank value
         * @property {number} CTMine=2 CTMine value
         */
        gamedef.ChessTyp = (function () {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CTInvalid"] = 0;
            values[valuesById[1] = "CTBlank"] = 1;
            values[valuesById[2] = "CTMine"] = 2;
            return values;
        })();
        gamedef.Chess = (function () {
            /**
             * Properties of a Chess.
             * @memberof gamedef
             * @interface IChess
             * @property {gamedef.ChessTyp|null} [chessType] Chess chessType
             * @property {boolean|null} [visible] Chess visible
             * @property {number|null} [mineNum] Chess mineNum
             */
            /**
             * Constructs a new Chess.
             * @memberof gamedef
             * @classdesc Represents a Chess.
             * @implements IChess
             * @constructor
             * @param {gamedef.IChess=} [properties] Properties to set
             */
            function Chess(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Chess chessType.
             * @member {gamedef.ChessTyp} chessType
             * @memberof gamedef.Chess
             * @instance
             */
            Chess.prototype.chessType = 0;
            /**
             * Chess visible.
             * @member {boolean} visible
             * @memberof gamedef.Chess
             * @instance
             */
            Chess.prototype.visible = false;
            /**
             * Chess mineNum.
             * @member {number} mineNum
             * @memberof gamedef.Chess
             * @instance
             */
            Chess.prototype.mineNum = 0;
            /**
             * Creates a new Chess instance using the specified properties.
             * @function create
             * @memberof gamedef.Chess
             * @static
             * @param {gamedef.IChess=} [properties] Properties to set
             * @returns {gamedef.Chess} Chess instance
             */
            Chess.create = function create(properties) {
                return new Chess(properties);
            };
            /**
             * Encodes the specified Chess message. Does not implicitly {@link gamedef.Chess.verify|verify} messages.
             * @function encode
             * @memberof gamedef.Chess
             * @static
             * @param {gamedef.IChess} message Chess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chess.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chessType != null && message.hasOwnProperty("chessType"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.chessType);
                if (message.visible != null && message.hasOwnProperty("visible"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.visible);
                if (message.mineNum != null && message.hasOwnProperty("mineNum"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.mineNum);
                return writer;
            };
            /**
             * Encodes the specified Chess message, length delimited. Does not implicitly {@link gamedef.Chess.verify|verify} messages.
             * @function encodeDelimited
             * @memberof gamedef.Chess
             * @static
             * @param {gamedef.IChess} message Chess message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chess.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a Chess message from the specified reader or buffer.
             * @function decode
             * @memberof gamedef.Chess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {gamedef.Chess} Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chess.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamedef.Chess();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.chessType = reader.int32();
                            break;
                        case 2:
                            message.visible = reader.bool();
                            break;
                        case 3:
                            message.mineNum = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a Chess message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof gamedef.Chess
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {gamedef.Chess} Chess
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chess.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a Chess message.
             * @function verify
             * @memberof gamedef.Chess
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chess.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chessType != null && message.hasOwnProperty("chessType"))
                    switch (message.chessType) {
                        default:
                            return "chessType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                    }
                if (message.visible != null && message.hasOwnProperty("visible"))
                    if (typeof message.visible !== "boolean")
                        return "visible: boolean expected";
                if (message.mineNum != null && message.hasOwnProperty("mineNum"))
                    if (!$util.isInteger(message.mineNum))
                        return "mineNum: integer expected";
                return null;
            };
            /**
             * Creates a Chess message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof gamedef.Chess
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {gamedef.Chess} Chess
             */
            Chess.fromObject = function fromObject(object) {
                if (object instanceof $root.gamedef.Chess)
                    return object;
                var message = new $root.gamedef.Chess();
                switch (object.chessType) {
                    case "CTInvalid":
                    case 0:
                        message.chessType = 0;
                        break;
                    case "CTBlank":
                    case 1:
                        message.chessType = 1;
                        break;
                    case "CTMine":
                    case 2:
                        message.chessType = 2;
                        break;
                }
                if (object.visible != null)
                    message.visible = Boolean(object.visible);
                if (object.mineNum != null)
                    message.mineNum = object.mineNum >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a Chess message. Also converts values to other types if specified.
             * @function toObject
             * @memberof gamedef.Chess
             * @static
             * @param {gamedef.Chess} message Chess
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chess.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.chessType = options.enums === String ? "CTInvalid" : 0;
                    object.visible = false;
                    object.mineNum = 0;
                }
                if (message.chessType != null && message.hasOwnProperty("chessType"))
                    object.chessType = options.enums === String ? $root.gamedef.ChessTyp[message.chessType] : message.chessType;
                if (message.visible != null && message.hasOwnProperty("visible"))
                    object.visible = message.visible;
                if (message.mineNum != null && message.hasOwnProperty("mineNum"))
                    object.mineNum = message.mineNum;
                return object;
            };
            /**
             * Converts this Chess to JSON.
             * @function toJSON
             * @memberof gamedef.Chess
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chess.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return Chess;
        })();
        return gamedef;
    })();
    $root.cmsg = (function () {
        /**
         * Namespace cmsg.
         * @exports cmsg
         * @namespace
         */
        var cmsg = {};
        cmsg.CReqSyncSystemTime = (function () {
            /**
             * Properties of a CReqSyncSystemTime.
             * @memberof cmsg
             * @interface ICReqSyncSystemTime
             * @property {number|Long|null} [timestamp] CReqSyncSystemTime timestamp
             */
            /**
             * Constructs a new CReqSyncSystemTime.
             * @memberof cmsg
             * @classdesc Represents a CReqSyncSystemTime.
             * @implements ICReqSyncSystemTime
             * @constructor
             * @param {cmsg.ICReqSyncSystemTime=} [properties] Properties to set
             */
            function CReqSyncSystemTime(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqSyncSystemTime timestamp.
             * @member {number|Long} timestamp
             * @memberof cmsg.CReqSyncSystemTime
             * @instance
             */
            CReqSyncSystemTime.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            /**
             * Creates a new CReqSyncSystemTime instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {cmsg.ICReqSyncSystemTime=} [properties] Properties to set
             * @returns {cmsg.CReqSyncSystemTime} CReqSyncSystemTime instance
             */
            CReqSyncSystemTime.create = function create(properties) {
                return new CReqSyncSystemTime(properties);
            };
            /**
             * Encodes the specified CReqSyncSystemTime message. Does not implicitly {@link cmsg.CReqSyncSystemTime.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {cmsg.ICReqSyncSystemTime} message CReqSyncSystemTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqSyncSystemTime.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.timestamp);
                return writer;
            };
            /**
             * Encodes the specified CReqSyncSystemTime message, length delimited. Does not implicitly {@link cmsg.CReqSyncSystemTime.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {cmsg.ICReqSyncSystemTime} message CReqSyncSystemTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqSyncSystemTime.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqSyncSystemTime message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqSyncSystemTime} CReqSyncSystemTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqSyncSystemTime.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqSyncSystemTime();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.timestamp = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqSyncSystemTime message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqSyncSystemTime} CReqSyncSystemTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqSyncSystemTime.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqSyncSystemTime message.
             * @function verify
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqSyncSystemTime.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };
            /**
             * Creates a CReqSyncSystemTime message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqSyncSystemTime} CReqSyncSystemTime
             */
            CReqSyncSystemTime.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqSyncSystemTime)
                    return object;
                var message = new $root.cmsg.CReqSyncSystemTime();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };
            /**
             * Creates a plain object from a CReqSyncSystemTime message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqSyncSystemTime
             * @static
             * @param {cmsg.CReqSyncSystemTime} message CReqSyncSystemTime
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqSyncSystemTime.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                return object;
            };
            /**
             * Converts this CReqSyncSystemTime to JSON.
             * @function toJSON
             * @memberof cmsg.CReqSyncSystemTime
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqSyncSystemTime.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqSyncSystemTime;
        })();
        cmsg.CRespSyncSystemTime = (function () {
            /**
             * Properties of a CRespSyncSystemTime.
             * @memberof cmsg
             * @interface ICRespSyncSystemTime
             * @property {number|Long|null} [timestamp] CRespSyncSystemTime timestamp
             * @property {number|Long|null} [serverTimestamp] CRespSyncSystemTime serverTimestamp
             */
            /**
             * Constructs a new CRespSyncSystemTime.
             * @memberof cmsg
             * @classdesc Represents a CRespSyncSystemTime.
             * @implements ICRespSyncSystemTime
             * @constructor
             * @param {cmsg.ICRespSyncSystemTime=} [properties] Properties to set
             */
            function CRespSyncSystemTime(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespSyncSystemTime timestamp.
             * @member {number|Long} timestamp
             * @memberof cmsg.CRespSyncSystemTime
             * @instance
             */
            CRespSyncSystemTime.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            /**
             * CRespSyncSystemTime serverTimestamp.
             * @member {number|Long} serverTimestamp
             * @memberof cmsg.CRespSyncSystemTime
             * @instance
             */
            CRespSyncSystemTime.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            /**
             * Creates a new CRespSyncSystemTime instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {cmsg.ICRespSyncSystemTime=} [properties] Properties to set
             * @returns {cmsg.CRespSyncSystemTime} CRespSyncSystemTime instance
             */
            CRespSyncSystemTime.create = function create(properties) {
                return new CRespSyncSystemTime(properties);
            };
            /**
             * Encodes the specified CRespSyncSystemTime message. Does not implicitly {@link cmsg.CRespSyncSystemTime.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {cmsg.ICRespSyncSystemTime} message CRespSyncSystemTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespSyncSystemTime.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.timestamp);
                if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.serverTimestamp);
                return writer;
            };
            /**
             * Encodes the specified CRespSyncSystemTime message, length delimited. Does not implicitly {@link cmsg.CRespSyncSystemTime.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {cmsg.ICRespSyncSystemTime} message CRespSyncSystemTime message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespSyncSystemTime.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespSyncSystemTime message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespSyncSystemTime} CRespSyncSystemTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespSyncSystemTime.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespSyncSystemTime();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.timestamp = reader.int64();
                            break;
                        case 2:
                            message.serverTimestamp = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespSyncSystemTime message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespSyncSystemTime} CRespSyncSystemTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespSyncSystemTime.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespSyncSystemTime message.
             * @function verify
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespSyncSystemTime.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                    if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
                        return "serverTimestamp: integer|Long expected";
                return null;
            };
            /**
             * Creates a CRespSyncSystemTime message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespSyncSystemTime} CRespSyncSystemTime
             */
            CRespSyncSystemTime.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespSyncSystemTime)
                    return object;
                var message = new $root.cmsg.CRespSyncSystemTime();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                if (object.serverTimestamp != null)
                    if ($util.Long)
                        (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
                    else if (typeof object.serverTimestamp === "string")
                        message.serverTimestamp = parseInt(object.serverTimestamp, 10);
                    else if (typeof object.serverTimestamp === "number")
                        message.serverTimestamp = object.serverTimestamp;
                    else if (typeof object.serverTimestamp === "object")
                        message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
                return message;
            };
            /**
             * Creates a plain object from a CRespSyncSystemTime message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespSyncSystemTime
             * @static
             * @param {cmsg.CRespSyncSystemTime} message CRespSyncSystemTime
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespSyncSystemTime.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.timestamp = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.serverTimestamp = options.longs === String ? "0" : 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                    if (typeof message.serverTimestamp === "number")
                        object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
                    else
                        object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
                return object;
            };
            /**
             * Converts this CRespSyncSystemTime to JSON.
             * @function toJSON
             * @memberof cmsg.CRespSyncSystemTime
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespSyncSystemTime.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespSyncSystemTime;
        })();
        cmsg.CReqAuth = (function () {
            /**
             * Properties of a CReqAuth.
             * @memberof cmsg
             * @interface ICReqAuth
             * @property {string|null} [account] CReqAuth account
             * @property {string|null} [password] CReqAuth password
             * @property {gamedef.IExtraAccountInfo|null} [extra] CReqAuth extra
             */
            /**
             * Constructs a new CReqAuth.
             * @memberof cmsg
             * @classdesc Represents a CReqAuth.
             * @implements ICReqAuth
             * @constructor
             * @param {cmsg.ICReqAuth=} [properties] Properties to set
             */
            function CReqAuth(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqAuth account.
             * @member {string} account
             * @memberof cmsg.CReqAuth
             * @instance
             */
            CReqAuth.prototype.account = "";
            /**
             * CReqAuth password.
             * @member {string} password
             * @memberof cmsg.CReqAuth
             * @instance
             */
            CReqAuth.prototype.password = "";
            /**
             * CReqAuth extra.
             * @member {gamedef.IExtraAccountInfo|null|undefined} extra
             * @memberof cmsg.CReqAuth
             * @instance
             */
            CReqAuth.prototype.extra = null;
            /**
             * Creates a new CReqAuth instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqAuth
             * @static
             * @param {cmsg.ICReqAuth=} [properties] Properties to set
             * @returns {cmsg.CReqAuth} CReqAuth instance
             */
            CReqAuth.create = function create(properties) {
                return new CReqAuth(properties);
            };
            /**
             * Encodes the specified CReqAuth message. Does not implicitly {@link cmsg.CReqAuth.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqAuth
             * @static
             * @param {cmsg.ICReqAuth} message CReqAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqAuth.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.account != null && message.hasOwnProperty("account"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.account);
                if (message.password != null && message.hasOwnProperty("password"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.password);
                if (message.extra != null && message.hasOwnProperty("extra"))
                    $root.gamedef.ExtraAccountInfo.encode(message.extra, writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CReqAuth message, length delimited. Does not implicitly {@link cmsg.CReqAuth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqAuth
             * @static
             * @param {cmsg.ICReqAuth} message CReqAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqAuth.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqAuth message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqAuth} CReqAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqAuth.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqAuth();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.account = reader.string();
                            break;
                        case 2:
                            message.password = reader.string();
                            break;
                        case 3:
                            message.extra = $root.gamedef.ExtraAccountInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqAuth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqAuth} CReqAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqAuth.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqAuth message.
             * @function verify
             * @memberof cmsg.CReqAuth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqAuth.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.account != null && message.hasOwnProperty("account"))
                    if (!$util.isString(message.account))
                        return "account: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                if (message.extra != null && message.hasOwnProperty("extra")) {
                    var error = $root.gamedef.ExtraAccountInfo.verify(message.extra);
                    if (error)
                        return "extra." + error;
                }
                return null;
            };
            /**
             * Creates a CReqAuth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqAuth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqAuth} CReqAuth
             */
            CReqAuth.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqAuth)
                    return object;
                var message = new $root.cmsg.CReqAuth();
                if (object.account != null)
                    message.account = String(object.account);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.extra != null) {
                    if (typeof object.extra !== "object")
                        throw TypeError(".cmsg.CReqAuth.extra: object expected");
                    message.extra = $root.gamedef.ExtraAccountInfo.fromObject(object.extra);
                }
                return message;
            };
            /**
             * Creates a plain object from a CReqAuth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqAuth
             * @static
             * @param {cmsg.CReqAuth} message CReqAuth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqAuth.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.account = "";
                    object.password = "";
                    object.extra = null;
                }
                if (message.account != null && message.hasOwnProperty("account"))
                    object.account = message.account;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.extra != null && message.hasOwnProperty("extra"))
                    object.extra = $root.gamedef.ExtraAccountInfo.toObject(message.extra, options);
                return object;
            };
            /**
             * Converts this CReqAuth to JSON.
             * @function toJSON
             * @memberof cmsg.CReqAuth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqAuth.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqAuth;
        })();
        cmsg.CRespAuth = (function () {
            /**
             * Properties of a CRespAuth.
             * @memberof cmsg
             * @interface ICRespAuth
             * @property {number|null} [errCode] CRespAuth errCode
             * @property {string|null} [errMsg] CRespAuth errMsg
             * @property {string|null} [account] CRespAuth account
             * @property {number|Long|null} [userID] CRespAuth userID
             * @property {string|null} [sign] CRespAuth sign
             * @property {number|Long|null} [unlockTime] CRespAuth unlockTime
             */
            /**
             * Constructs a new CRespAuth.
             * @memberof cmsg
             * @classdesc Represents a CRespAuth.
             * @implements ICRespAuth
             * @constructor
             * @param {cmsg.ICRespAuth=} [properties] Properties to set
             */
            function CRespAuth(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespAuth errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.errCode = 0;
            /**
             * CRespAuth errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.errMsg = "";
            /**
             * CRespAuth account.
             * @member {string} account
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.account = "";
            /**
             * CRespAuth userID.
             * @member {number|Long} userID
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * CRespAuth sign.
             * @member {string} sign
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.sign = "";
            /**
             * CRespAuth unlockTime.
             * @member {number|Long} unlockTime
             * @memberof cmsg.CRespAuth
             * @instance
             */
            CRespAuth.prototype.unlockTime = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
            /**
             * Creates a new CRespAuth instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespAuth
             * @static
             * @param {cmsg.ICRespAuth=} [properties] Properties to set
             * @returns {cmsg.CRespAuth} CRespAuth instance
             */
            CRespAuth.create = function create(properties) {
                return new CRespAuth(properties);
            };
            /**
             * Encodes the specified CRespAuth message. Does not implicitly {@link cmsg.CRespAuth.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespAuth
             * @static
             * @param {cmsg.ICRespAuth} message CRespAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespAuth.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                if (message.account != null && message.hasOwnProperty("account"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.account);
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).uint64(message.userID);
                if (message.sign != null && message.hasOwnProperty("sign"))
                    writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.sign);
                if (message.unlockTime != null && message.hasOwnProperty("unlockTime"))
                    writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.unlockTime);
                return writer;
            };
            /**
             * Encodes the specified CRespAuth message, length delimited. Does not implicitly {@link cmsg.CRespAuth.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespAuth
             * @static
             * @param {cmsg.ICRespAuth} message CRespAuth message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespAuth.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespAuth message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespAuth} CRespAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespAuth.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespAuth();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        case 3:
                            message.account = reader.string();
                            break;
                        case 4:
                            message.userID = reader.uint64();
                            break;
                        case 5:
                            message.sign = reader.string();
                            break;
                        case 6:
                            message.unlockTime = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespAuth message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespAuth
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespAuth} CRespAuth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespAuth.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespAuth message.
             * @function verify
             * @memberof cmsg.CRespAuth
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespAuth.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.account != null && message.hasOwnProperty("account"))
                    if (!$util.isString(message.account))
                        return "account: string expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                if (message.unlockTime != null && message.hasOwnProperty("unlockTime"))
                    if (!$util.isInteger(message.unlockTime) && !(message.unlockTime && $util.isInteger(message.unlockTime.low) && $util.isInteger(message.unlockTime.high)))
                        return "unlockTime: integer|Long expected";
                return null;
            };
            /**
             * Creates a CRespAuth message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespAuth
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespAuth} CRespAuth
             */
            CRespAuth.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespAuth)
                    return object;
                var message = new $root.cmsg.CRespAuth();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.account != null)
                    message.account = String(object.account);
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.sign != null)
                    message.sign = String(object.sign);
                if (object.unlockTime != null)
                    if ($util.Long)
                        (message.unlockTime = $util.Long.fromValue(object.unlockTime)).unsigned = false;
                    else if (typeof object.unlockTime === "string")
                        message.unlockTime = parseInt(object.unlockTime, 10);
                    else if (typeof object.unlockTime === "number")
                        message.unlockTime = object.unlockTime;
                    else if (typeof object.unlockTime === "object")
                        message.unlockTime = new $util.LongBits(object.unlockTime.low >>> 0, object.unlockTime.high >>> 0).toNumber();
                return message;
            };
            /**
             * Creates a plain object from a CRespAuth message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespAuth
             * @static
             * @param {cmsg.CRespAuth} message CRespAuth
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespAuth.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                    object.account = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    object.sign = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.unlockTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.unlockTime = options.longs === String ? "0" : 0;
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.account != null && message.hasOwnProperty("account"))
                    object.account = message.account;
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.sign != null && message.hasOwnProperty("sign"))
                    object.sign = message.sign;
                if (message.unlockTime != null && message.hasOwnProperty("unlockTime"))
                    if (typeof message.unlockTime === "number")
                        object.unlockTime = options.longs === String ? String(message.unlockTime) : message.unlockTime;
                    else
                        object.unlockTime = options.longs === String ? $util.Long.prototype.toString.call(message.unlockTime) : options.longs === Number ? new $util.LongBits(message.unlockTime.low >>> 0, message.unlockTime.high >>> 0).toNumber() : message.unlockTime;
                return object;
            };
            /**
             * Converts this CRespAuth to JSON.
             * @function toJSON
             * @memberof cmsg.CRespAuth
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespAuth.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespAuth;
        })();
        cmsg.CNotifyLoginInfo = (function () {
            /**
             * Properties of a CNotifyLoginInfo.
             * @memberof cmsg
             * @interface ICNotifyLoginInfo
             * @property {string|null} [account] CNotifyLoginInfo account
             * @property {string|null} [ip] CNotifyLoginInfo ip
             */
            /**
             * Constructs a new CNotifyLoginInfo.
             * @memberof cmsg
             * @classdesc Represents a CNotifyLoginInfo.
             * @implements ICNotifyLoginInfo
             * @constructor
             * @param {cmsg.ICNotifyLoginInfo=} [properties] Properties to set
             */
            function CNotifyLoginInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyLoginInfo account.
             * @member {string} account
             * @memberof cmsg.CNotifyLoginInfo
             * @instance
             */
            CNotifyLoginInfo.prototype.account = "";
            /**
             * CNotifyLoginInfo ip.
             * @member {string} ip
             * @memberof cmsg.CNotifyLoginInfo
             * @instance
             */
            CNotifyLoginInfo.prototype.ip = "";
            /**
             * Creates a new CNotifyLoginInfo instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {cmsg.ICNotifyLoginInfo=} [properties] Properties to set
             * @returns {cmsg.CNotifyLoginInfo} CNotifyLoginInfo instance
             */
            CNotifyLoginInfo.create = function create(properties) {
                return new CNotifyLoginInfo(properties);
            };
            /**
             * Encodes the specified CNotifyLoginInfo message. Does not implicitly {@link cmsg.CNotifyLoginInfo.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {cmsg.ICNotifyLoginInfo} message CNotifyLoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyLoginInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.account != null && message.hasOwnProperty("account"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.account);
                if (message.ip != null && message.hasOwnProperty("ip"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.ip);
                return writer;
            };
            /**
             * Encodes the specified CNotifyLoginInfo message, length delimited. Does not implicitly {@link cmsg.CNotifyLoginInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {cmsg.ICNotifyLoginInfo} message CNotifyLoginInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyLoginInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyLoginInfo message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyLoginInfo} CNotifyLoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyLoginInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyLoginInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.account = reader.string();
                            break;
                        case 2:
                            message.ip = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyLoginInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyLoginInfo} CNotifyLoginInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyLoginInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyLoginInfo message.
             * @function verify
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyLoginInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.account != null && message.hasOwnProperty("account"))
                    if (!$util.isString(message.account))
                        return "account: string expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                return null;
            };
            /**
             * Creates a CNotifyLoginInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyLoginInfo} CNotifyLoginInfo
             */
            CNotifyLoginInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyLoginInfo)
                    return object;
                var message = new $root.cmsg.CNotifyLoginInfo();
                if (object.account != null)
                    message.account = String(object.account);
                if (object.ip != null)
                    message.ip = String(object.ip);
                return message;
            };
            /**
             * Creates a plain object from a CNotifyLoginInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyLoginInfo
             * @static
             * @param {cmsg.CNotifyLoginInfo} message CNotifyLoginInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyLoginInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.account = "";
                    object.ip = "";
                }
                if (message.account != null && message.hasOwnProperty("account"))
                    object.account = message.account;
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                return object;
            };
            /**
             * Converts this CNotifyLoginInfo to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyLoginInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyLoginInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyLoginInfo;
        })();
        cmsg.CReqLogin = (function () {
            /**
             * Properties of a CReqLogin.
             * @memberof cmsg
             * @interface ICReqLogin
             * @property {number|Long|null} [userID] CReqLogin userID
             * @property {string|null} [sign] CReqLogin sign
             */
            /**
             * Constructs a new CReqLogin.
             * @memberof cmsg
             * @classdesc Represents a CReqLogin.
             * @implements ICReqLogin
             * @constructor
             * @param {cmsg.ICReqLogin=} [properties] Properties to set
             */
            function CReqLogin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqLogin userID.
             * @member {number|Long} userID
             * @memberof cmsg.CReqLogin
             * @instance
             */
            CReqLogin.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * CReqLogin sign.
             * @member {string} sign
             * @memberof cmsg.CReqLogin
             * @instance
             */
            CReqLogin.prototype.sign = "";
            /**
             * Creates a new CReqLogin instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqLogin
             * @static
             * @param {cmsg.ICReqLogin=} [properties] Properties to set
             * @returns {cmsg.CReqLogin} CReqLogin instance
             */
            CReqLogin.create = function create(properties) {
                return new CReqLogin(properties);
            };
            /**
             * Encodes the specified CReqLogin message. Does not implicitly {@link cmsg.CReqLogin.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqLogin
             * @static
             * @param {cmsg.ICReqLogin} message CReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqLogin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.userID);
                if (message.sign != null && message.hasOwnProperty("sign"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.sign);
                return writer;
            };
            /**
             * Encodes the specified CReqLogin message, length delimited. Does not implicitly {@link cmsg.CReqLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqLogin
             * @static
             * @param {cmsg.ICReqLogin} message CReqLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqLogin message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqLogin} CReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqLogin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqLogin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.userID = reader.uint64();
                            break;
                        case 2:
                            message.sign = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqLogin} CReqLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqLogin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqLogin message.
             * @function verify
             * @memberof cmsg.CReqLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqLogin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                return null;
            };
            /**
             * Creates a CReqLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqLogin} CReqLogin
             */
            CReqLogin.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqLogin)
                    return object;
                var message = new $root.cmsg.CReqLogin();
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.sign != null)
                    message.sign = String(object.sign);
                return message;
            };
            /**
             * Creates a plain object from a CReqLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqLogin
             * @static
             * @param {cmsg.CReqLogin} message CReqLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqLogin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    object.sign = "";
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.sign != null && message.hasOwnProperty("sign"))
                    object.sign = message.sign;
                return object;
            };
            /**
             * Converts this CReqLogin to JSON.
             * @function toJSON
             * @memberof cmsg.CReqLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqLogin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqLogin;
        })();
        cmsg.CRespLogin = (function () {
            /**
             * Properties of a CRespLogin.
             * @memberof cmsg
             * @interface ICRespLogin
             * @property {number|null} [errCode] CRespLogin errCode
             * @property {string|null} [errMsg] CRespLogin errMsg
             * @property {number|Long|null} [userID] CRespLogin userID
             * @property {gamedef.IUser|null} [user] CRespLogin user
             * @property {boolean|null} [isReconnect] CRespLogin isReconnect
             */
            /**
             * Constructs a new CRespLogin.
             * @memberof cmsg
             * @classdesc Represents a CRespLogin.
             * @implements ICRespLogin
             * @constructor
             * @param {cmsg.ICRespLogin=} [properties] Properties to set
             */
            function CRespLogin(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespLogin errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespLogin
             * @instance
             */
            CRespLogin.prototype.errCode = 0;
            /**
             * CRespLogin errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespLogin
             * @instance
             */
            CRespLogin.prototype.errMsg = "";
            /**
             * CRespLogin userID.
             * @member {number|Long} userID
             * @memberof cmsg.CRespLogin
             * @instance
             */
            CRespLogin.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * CRespLogin user.
             * @member {gamedef.IUser|null|undefined} user
             * @memberof cmsg.CRespLogin
             * @instance
             */
            CRespLogin.prototype.user = null;
            /**
             * CRespLogin isReconnect.
             * @member {boolean} isReconnect
             * @memberof cmsg.CRespLogin
             * @instance
             */
            CRespLogin.prototype.isReconnect = false;
            /**
             * Creates a new CRespLogin instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespLogin
             * @static
             * @param {cmsg.ICRespLogin=} [properties] Properties to set
             * @returns {cmsg.CRespLogin} CRespLogin instance
             */
            CRespLogin.create = function create(properties) {
                return new CRespLogin(properties);
            };
            /**
             * Encodes the specified CRespLogin message. Does not implicitly {@link cmsg.CRespLogin.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespLogin
             * @static
             * @param {cmsg.ICRespLogin} message CRespLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespLogin.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint64(message.userID);
                if (message.user != null && message.hasOwnProperty("user"))
                    $root.gamedef.User.encode(message.user, writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                    writer.uint32(/* id 5, wireType 0 =*/ 40).bool(message.isReconnect);
                return writer;
            };
            /**
             * Encodes the specified CRespLogin message, length delimited. Does not implicitly {@link cmsg.CRespLogin.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespLogin
             * @static
             * @param {cmsg.ICRespLogin} message CRespLogin message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespLogin.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespLogin message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespLogin} CRespLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespLogin.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespLogin();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        case 3:
                            message.userID = reader.uint64();
                            break;
                        case 4:
                            message.user = $root.gamedef.User.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.isReconnect = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespLogin message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespLogin
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespLogin} CRespLogin
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespLogin.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespLogin message.
             * @function verify
             * @memberof cmsg.CRespLogin
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespLogin.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.gamedef.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                    if (typeof message.isReconnect !== "boolean")
                        return "isReconnect: boolean expected";
                return null;
            };
            /**
             * Creates a CRespLogin message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespLogin
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespLogin} CRespLogin
             */
            CRespLogin.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespLogin)
                    return object;
                var message = new $root.cmsg.CRespLogin();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".cmsg.CRespLogin.user: object expected");
                    message.user = $root.gamedef.User.fromObject(object.user);
                }
                if (object.isReconnect != null)
                    message.isReconnect = Boolean(object.isReconnect);
                return message;
            };
            /**
             * Creates a plain object from a CRespLogin message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespLogin
             * @static
             * @param {cmsg.CRespLogin} message CRespLogin
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespLogin.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    object.user = null;
                    object.isReconnect = false;
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.gamedef.User.toObject(message.user, options);
                if (message.isReconnect != null && message.hasOwnProperty("isReconnect"))
                    object.isReconnect = message.isReconnect;
                return object;
            };
            /**
             * Converts this CRespLogin to JSON.
             * @function toJSON
             * @memberof cmsg.CRespLogin
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespLogin.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespLogin;
        })();
        cmsg.CReqLogout = (function () {
            /**
             * Properties of a CReqLogout.
             * @memberof cmsg
             * @interface ICReqLogout
             */
            /**
             * Constructs a new CReqLogout.
             * @memberof cmsg
             * @classdesc Represents a CReqLogout.
             * @implements ICReqLogout
             * @constructor
             * @param {cmsg.ICReqLogout=} [properties] Properties to set
             */
            function CReqLogout(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new CReqLogout instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqLogout
             * @static
             * @param {cmsg.ICReqLogout=} [properties] Properties to set
             * @returns {cmsg.CReqLogout} CReqLogout instance
             */
            CReqLogout.create = function create(properties) {
                return new CReqLogout(properties);
            };
            /**
             * Encodes the specified CReqLogout message. Does not implicitly {@link cmsg.CReqLogout.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqLogout
             * @static
             * @param {cmsg.ICReqLogout} message CReqLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqLogout.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
            /**
             * Encodes the specified CReqLogout message, length delimited. Does not implicitly {@link cmsg.CReqLogout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqLogout
             * @static
             * @param {cmsg.ICReqLogout} message CReqLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqLogout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqLogout message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqLogout} CReqLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqLogout.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqLogout();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqLogout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqLogout} CReqLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqLogout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqLogout message.
             * @function verify
             * @memberof cmsg.CReqLogout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqLogout.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
            /**
             * Creates a CReqLogout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqLogout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqLogout} CReqLogout
             */
            CReqLogout.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqLogout)
                    return object;
                return new $root.cmsg.CReqLogout();
            };
            /**
             * Creates a plain object from a CReqLogout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqLogout
             * @static
             * @param {cmsg.CReqLogout} message CReqLogout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqLogout.toObject = function toObject() {
                return {};
            };
            /**
             * Converts this CReqLogout to JSON.
             * @function toJSON
             * @memberof cmsg.CReqLogout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqLogout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqLogout;
        })();
        cmsg.CRespLogout = (function () {
            /**
             * Properties of a CRespLogout.
             * @memberof cmsg
             * @interface ICRespLogout
             * @property {number|null} [errCode] CRespLogout errCode
             * @property {string|null} [errMsg] CRespLogout errMsg
             */
            /**
             * Constructs a new CRespLogout.
             * @memberof cmsg
             * @classdesc Represents a CRespLogout.
             * @implements ICRespLogout
             * @constructor
             * @param {cmsg.ICRespLogout=} [properties] Properties to set
             */
            function CRespLogout(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespLogout errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespLogout
             * @instance
             */
            CRespLogout.prototype.errCode = 0;
            /**
             * CRespLogout errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespLogout
             * @instance
             */
            CRespLogout.prototype.errMsg = "";
            /**
             * Creates a new CRespLogout instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespLogout
             * @static
             * @param {cmsg.ICRespLogout=} [properties] Properties to set
             * @returns {cmsg.CRespLogout} CRespLogout instance
             */
            CRespLogout.create = function create(properties) {
                return new CRespLogout(properties);
            };
            /**
             * Encodes the specified CRespLogout message. Does not implicitly {@link cmsg.CRespLogout.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespLogout
             * @static
             * @param {cmsg.ICRespLogout} message CRespLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespLogout.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                return writer;
            };
            /**
             * Encodes the specified CRespLogout message, length delimited. Does not implicitly {@link cmsg.CRespLogout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespLogout
             * @static
             * @param {cmsg.ICRespLogout} message CRespLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespLogout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespLogout message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespLogout} CRespLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespLogout.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespLogout();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespLogout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespLogout} CRespLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespLogout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespLogout message.
             * @function verify
             * @memberof cmsg.CRespLogout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespLogout.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };
            /**
             * Creates a CRespLogout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespLogout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespLogout} CRespLogout
             */
            CRespLogout.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespLogout)
                    return object;
                var message = new $root.cmsg.CRespLogout();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };
            /**
             * Creates a plain object from a CRespLogout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespLogout
             * @static
             * @param {cmsg.CRespLogout} message CRespLogout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespLogout.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };
            /**
             * Converts this CRespLogout to JSON.
             * @function toJSON
             * @memberof cmsg.CRespLogout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespLogout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespLogout;
        })();
        cmsg.CNotifyLogout = (function () {
            /**
             * Properties of a CNotifyLogout.
             * @memberof cmsg
             * @interface ICNotifyLogout
             * @property {gamedef.ILoginInfo|null} [loginInfo] CNotifyLogout loginInfo
             */
            /**
             * Constructs a new CNotifyLogout.
             * @memberof cmsg
             * @classdesc Represents a CNotifyLogout.
             * @implements ICNotifyLogout
             * @constructor
             * @param {cmsg.ICNotifyLogout=} [properties] Properties to set
             */
            function CNotifyLogout(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyLogout loginInfo.
             * @member {gamedef.ILoginInfo|null|undefined} loginInfo
             * @memberof cmsg.CNotifyLogout
             * @instance
             */
            CNotifyLogout.prototype.loginInfo = null;
            /**
             * Creates a new CNotifyLogout instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {cmsg.ICNotifyLogout=} [properties] Properties to set
             * @returns {cmsg.CNotifyLogout} CNotifyLogout instance
             */
            CNotifyLogout.create = function create(properties) {
                return new CNotifyLogout(properties);
            };
            /**
             * Encodes the specified CNotifyLogout message. Does not implicitly {@link cmsg.CNotifyLogout.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {cmsg.ICNotifyLogout} message CNotifyLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyLogout.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.loginInfo != null && message.hasOwnProperty("loginInfo"))
                    $root.gamedef.LoginInfo.encode(message.loginInfo, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CNotifyLogout message, length delimited. Does not implicitly {@link cmsg.CNotifyLogout.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {cmsg.ICNotifyLogout} message CNotifyLogout message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyLogout.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyLogout message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyLogout} CNotifyLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyLogout.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyLogout();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.loginInfo = $root.gamedef.LoginInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyLogout message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyLogout} CNotifyLogout
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyLogout.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyLogout message.
             * @function verify
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyLogout.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.loginInfo != null && message.hasOwnProperty("loginInfo")) {
                    var error = $root.gamedef.LoginInfo.verify(message.loginInfo);
                    if (error)
                        return "loginInfo." + error;
                }
                return null;
            };
            /**
             * Creates a CNotifyLogout message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyLogout} CNotifyLogout
             */
            CNotifyLogout.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyLogout)
                    return object;
                var message = new $root.cmsg.CNotifyLogout();
                if (object.loginInfo != null) {
                    if (typeof object.loginInfo !== "object")
                        throw TypeError(".cmsg.CNotifyLogout.loginInfo: object expected");
                    message.loginInfo = $root.gamedef.LoginInfo.fromObject(object.loginInfo);
                }
                return message;
            };
            /**
             * Creates a plain object from a CNotifyLogout message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyLogout
             * @static
             * @param {cmsg.CNotifyLogout} message CNotifyLogout
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyLogout.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.loginInfo = null;
                if (message.loginInfo != null && message.hasOwnProperty("loginInfo"))
                    object.loginInfo = $root.gamedef.LoginInfo.toObject(message.loginInfo, options);
                return object;
            };
            /**
             * Converts this CNotifyLogout to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyLogout
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyLogout.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyLogout;
        })();
        cmsg.CReqNotifyUserData = (function () {
            /**
             * Properties of a CReqNotifyUserData.
             * @memberof cmsg
             * @interface ICReqNotifyUserData
             */
            /**
             * Constructs a new CReqNotifyUserData.
             * @memberof cmsg
             * @classdesc Represents a CReqNotifyUserData.
             * @implements ICReqNotifyUserData
             * @constructor
             * @param {cmsg.ICReqNotifyUserData=} [properties] Properties to set
             */
            function CReqNotifyUserData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * Creates a new CReqNotifyUserData instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {cmsg.ICReqNotifyUserData=} [properties] Properties to set
             * @returns {cmsg.CReqNotifyUserData} CReqNotifyUserData instance
             */
            CReqNotifyUserData.create = function create(properties) {
                return new CReqNotifyUserData(properties);
            };
            /**
             * Encodes the specified CReqNotifyUserData message. Does not implicitly {@link cmsg.CReqNotifyUserData.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {cmsg.ICReqNotifyUserData} message CReqNotifyUserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqNotifyUserData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
            /**
             * Encodes the specified CReqNotifyUserData message, length delimited. Does not implicitly {@link cmsg.CReqNotifyUserData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {cmsg.ICReqNotifyUserData} message CReqNotifyUserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqNotifyUserData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqNotifyUserData message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqNotifyUserData} CReqNotifyUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqNotifyUserData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqNotifyUserData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqNotifyUserData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqNotifyUserData} CReqNotifyUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqNotifyUserData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqNotifyUserData message.
             * @function verify
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqNotifyUserData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
            /**
             * Creates a CReqNotifyUserData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqNotifyUserData} CReqNotifyUserData
             */
            CReqNotifyUserData.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqNotifyUserData)
                    return object;
                return new $root.cmsg.CReqNotifyUserData();
            };
            /**
             * Creates a plain object from a CReqNotifyUserData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqNotifyUserData
             * @static
             * @param {cmsg.CReqNotifyUserData} message CReqNotifyUserData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqNotifyUserData.toObject = function toObject() {
                return {};
            };
            /**
             * Converts this CReqNotifyUserData to JSON.
             * @function toJSON
             * @memberof cmsg.CReqNotifyUserData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqNotifyUserData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqNotifyUserData;
        })();
        cmsg.CRespNotifyUserData = (function () {
            /**
             * Properties of a CRespNotifyUserData.
             * @memberof cmsg
             * @interface ICRespNotifyUserData
             * @property {number|null} [errCode] CRespNotifyUserData errCode
             * @property {string|null} [errMsg] CRespNotifyUserData errMsg
             * @property {Array.<gamedef.IGeneral>|null} [generals] CRespNotifyUserData generals
             * @property {Array.<gamedef.IItem>|null} [Items] CRespNotifyUserData Items
             */
            /**
             * Constructs a new CRespNotifyUserData.
             * @memberof cmsg
             * @classdesc Represents a CRespNotifyUserData.
             * @implements ICRespNotifyUserData
             * @constructor
             * @param {cmsg.ICRespNotifyUserData=} [properties] Properties to set
             */
            function CRespNotifyUserData(properties) {
                this.generals = [];
                this.Items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespNotifyUserData errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespNotifyUserData
             * @instance
             */
            CRespNotifyUserData.prototype.errCode = 0;
            /**
             * CRespNotifyUserData errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespNotifyUserData
             * @instance
             */
            CRespNotifyUserData.prototype.errMsg = "";
            /**
             * CRespNotifyUserData generals.
             * @member {Array.<gamedef.IGeneral>} generals
             * @memberof cmsg.CRespNotifyUserData
             * @instance
             */
            CRespNotifyUserData.prototype.generals = $util.emptyArray;
            /**
             * CRespNotifyUserData Items.
             * @member {Array.<gamedef.IItem>} Items
             * @memberof cmsg.CRespNotifyUserData
             * @instance
             */
            CRespNotifyUserData.prototype.Items = $util.emptyArray;
            /**
             * Creates a new CRespNotifyUserData instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {cmsg.ICRespNotifyUserData=} [properties] Properties to set
             * @returns {cmsg.CRespNotifyUserData} CRespNotifyUserData instance
             */
            CRespNotifyUserData.create = function create(properties) {
                return new CRespNotifyUserData(properties);
            };
            /**
             * Encodes the specified CRespNotifyUserData message. Does not implicitly {@link cmsg.CRespNotifyUserData.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {cmsg.ICRespNotifyUserData} message CRespNotifyUserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespNotifyUserData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                if (message.generals != null && message.generals.length)
                    for (var i = 0; i < message.generals.length; ++i)
                        $root.gamedef.General.encode(message.generals[i], writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                if (message.Items != null && message.Items.length)
                    for (var i = 0; i < message.Items.length; ++i)
                        $root.gamedef.Item.encode(message.Items[i], writer.uint32(/* id 4, wireType 2 =*/ 34).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CRespNotifyUserData message, length delimited. Does not implicitly {@link cmsg.CRespNotifyUserData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {cmsg.ICRespNotifyUserData} message CRespNotifyUserData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespNotifyUserData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespNotifyUserData message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespNotifyUserData} CRespNotifyUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespNotifyUserData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespNotifyUserData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        case 3:
                            if (!(message.generals && message.generals.length))
                                message.generals = [];
                            message.generals.push($root.gamedef.General.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.Items && message.Items.length))
                                message.Items = [];
                            message.Items.push($root.gamedef.Item.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespNotifyUserData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespNotifyUserData} CRespNotifyUserData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespNotifyUserData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespNotifyUserData message.
             * @function verify
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespNotifyUserData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.generals != null && message.hasOwnProperty("generals")) {
                    if (!Array.isArray(message.generals))
                        return "generals: array expected";
                    for (var i = 0; i < message.generals.length; ++i) {
                        var error = $root.gamedef.General.verify(message.generals[i]);
                        if (error)
                            return "generals." + error;
                    }
                }
                if (message.Items != null && message.hasOwnProperty("Items")) {
                    if (!Array.isArray(message.Items))
                        return "Items: array expected";
                    for (var i = 0; i < message.Items.length; ++i) {
                        var error = $root.gamedef.Item.verify(message.Items[i]);
                        if (error)
                            return "Items." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a CRespNotifyUserData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespNotifyUserData} CRespNotifyUserData
             */
            CRespNotifyUserData.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespNotifyUserData)
                    return object;
                var message = new $root.cmsg.CRespNotifyUserData();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.generals) {
                    if (!Array.isArray(object.generals))
                        throw TypeError(".cmsg.CRespNotifyUserData.generals: array expected");
                    message.generals = [];
                    for (var i = 0; i < object.generals.length; ++i) {
                        if (typeof object.generals[i] !== "object")
                            throw TypeError(".cmsg.CRespNotifyUserData.generals: object expected");
                        message.generals[i] = $root.gamedef.General.fromObject(object.generals[i]);
                    }
                }
                if (object.Items) {
                    if (!Array.isArray(object.Items))
                        throw TypeError(".cmsg.CRespNotifyUserData.Items: array expected");
                    message.Items = [];
                    for (var i = 0; i < object.Items.length; ++i) {
                        if (typeof object.Items[i] !== "object")
                            throw TypeError(".cmsg.CRespNotifyUserData.Items: object expected");
                        message.Items[i] = $root.gamedef.Item.fromObject(object.Items[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a CRespNotifyUserData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespNotifyUserData
             * @static
             * @param {cmsg.CRespNotifyUserData} message CRespNotifyUserData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespNotifyUserData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.generals = [];
                    object.Items = [];
                }
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.generals && message.generals.length) {
                    object.generals = [];
                    for (var j = 0; j < message.generals.length; ++j)
                        object.generals[j] = $root.gamedef.General.toObject(message.generals[j], options);
                }
                if (message.Items && message.Items.length) {
                    object.Items = [];
                    for (var j = 0; j < message.Items.length; ++j)
                        object.Items[j] = $root.gamedef.Item.toObject(message.Items[j], options);
                }
                return object;
            };
            /**
             * Converts this CRespNotifyUserData to JSON.
             * @function toJSON
             * @memberof cmsg.CRespNotifyUserData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespNotifyUserData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespNotifyUserData;
        })();
        cmsg.CNotifyDataChange = (function () {
            /**
             * Properties of a CNotifyDataChange.
             * @memberof cmsg
             * @interface ICNotifyDataChange
             * @property {Array.<cmsg.CNotifyDataChange.type>|null} [changes] CNotifyDataChange changes
             * @property {gamedef.IUser|null} [user] CNotifyDataChange user
             * @property {Array.<gamedef.IGeneral>|null} [generals] CNotifyDataChange generals
             */
            /**
             * Constructs a new CNotifyDataChange.
             * @memberof cmsg
             * @classdesc Represents a CNotifyDataChange.
             * @implements ICNotifyDataChange
             * @constructor
             * @param {cmsg.ICNotifyDataChange=} [properties] Properties to set
             */
            function CNotifyDataChange(properties) {
                this.changes = [];
                this.generals = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyDataChange changes.
             * @member {Array.<cmsg.CNotifyDataChange.type>} changes
             * @memberof cmsg.CNotifyDataChange
             * @instance
             */
            CNotifyDataChange.prototype.changes = $util.emptyArray;
            /**
             * CNotifyDataChange user.
             * @member {gamedef.IUser|null|undefined} user
             * @memberof cmsg.CNotifyDataChange
             * @instance
             */
            CNotifyDataChange.prototype.user = null;
            /**
             * CNotifyDataChange generals.
             * @member {Array.<gamedef.IGeneral>} generals
             * @memberof cmsg.CNotifyDataChange
             * @instance
             */
            CNotifyDataChange.prototype.generals = $util.emptyArray;
            /**
             * Creates a new CNotifyDataChange instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {cmsg.ICNotifyDataChange=} [properties] Properties to set
             * @returns {cmsg.CNotifyDataChange} CNotifyDataChange instance
             */
            CNotifyDataChange.create = function create(properties) {
                return new CNotifyDataChange(properties);
            };
            /**
             * Encodes the specified CNotifyDataChange message. Does not implicitly {@link cmsg.CNotifyDataChange.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {cmsg.ICNotifyDataChange} message CNotifyDataChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyDataChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.changes != null && message.changes.length) {
                    writer.uint32(/* id 1, wireType 2 =*/ 10).fork();
                    for (var i = 0; i < message.changes.length; ++i)
                        writer.int32(message.changes[i]);
                    writer.ldelim();
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    $root.gamedef.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/ 18).fork()).ldelim();
                if (message.generals != null && message.generals.length)
                    for (var i = 0; i < message.generals.length; ++i)
                        $root.gamedef.General.encode(message.generals[i], writer.uint32(/* id 3, wireType 2 =*/ 26).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CNotifyDataChange message, length delimited. Does not implicitly {@link cmsg.CNotifyDataChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {cmsg.ICNotifyDataChange} message CNotifyDataChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyDataChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyDataChange message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyDataChange} CNotifyDataChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyDataChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyDataChange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.changes && message.changes.length))
                                message.changes = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.changes.push(reader.int32());
                            }
                            else
                                message.changes.push(reader.int32());
                            break;
                        case 2:
                            message.user = $root.gamedef.User.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.generals && message.generals.length))
                                message.generals = [];
                            message.generals.push($root.gamedef.General.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyDataChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyDataChange} CNotifyDataChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyDataChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyDataChange message.
             * @function verify
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyDataChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.changes != null && message.hasOwnProperty("changes")) {
                    if (!Array.isArray(message.changes))
                        return "changes: array expected";
                    for (var i = 0; i < message.changes.length; ++i)
                        switch (message.changes[i]) {
                            default:
                                return "changes: enum value[] expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                        }
                }
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.gamedef.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.generals != null && message.hasOwnProperty("generals")) {
                    if (!Array.isArray(message.generals))
                        return "generals: array expected";
                    for (var i = 0; i < message.generals.length; ++i) {
                        var error = $root.gamedef.General.verify(message.generals[i]);
                        if (error)
                            return "generals." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a CNotifyDataChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyDataChange} CNotifyDataChange
             */
            CNotifyDataChange.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyDataChange)
                    return object;
                var message = new $root.cmsg.CNotifyDataChange();
                if (object.changes) {
                    if (!Array.isArray(object.changes))
                        throw TypeError(".cmsg.CNotifyDataChange.changes: array expected");
                    message.changes = [];
                    for (var i = 0; i < object.changes.length; ++i)
                        switch (object.changes[i]) {
                            default:
                            case "DCTInvalid":
                            case 0:
                                message.changes[i] = 0;
                                break;
                            case "DCTUser":
                            case 1:
                                message.changes[i] = 1;
                                break;
                            case "DCTGeneral":
                            case 2:
                                message.changes[i] = 2;
                                break;
                        }
                }
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".cmsg.CNotifyDataChange.user: object expected");
                    message.user = $root.gamedef.User.fromObject(object.user);
                }
                if (object.generals) {
                    if (!Array.isArray(object.generals))
                        throw TypeError(".cmsg.CNotifyDataChange.generals: array expected");
                    message.generals = [];
                    for (var i = 0; i < object.generals.length; ++i) {
                        if (typeof object.generals[i] !== "object")
                            throw TypeError(".cmsg.CNotifyDataChange.generals: object expected");
                        message.generals[i] = $root.gamedef.General.fromObject(object.generals[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a CNotifyDataChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyDataChange
             * @static
             * @param {cmsg.CNotifyDataChange} message CNotifyDataChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyDataChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.changes = [];
                    object.generals = [];
                }
                if (options.defaults)
                    object.user = null;
                if (message.changes && message.changes.length) {
                    object.changes = [];
                    for (var j = 0; j < message.changes.length; ++j)
                        object.changes[j] = options.enums === String ? $root.cmsg.CNotifyDataChange.type[message.changes[j]] : message.changes[j];
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.gamedef.User.toObject(message.user, options);
                if (message.generals && message.generals.length) {
                    object.generals = [];
                    for (var j = 0; j < message.generals.length; ++j)
                        object.generals[j] = $root.gamedef.General.toObject(message.generals[j], options);
                }
                return object;
            };
            /**
             * Converts this CNotifyDataChange to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyDataChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyDataChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            /**
             * type enum.
             * @name cmsg.CNotifyDataChange.type
             * @enum {string}
             * @property {number} DCTInvalid=0 DCTInvalid value
             * @property {number} DCTUser=1 DCTUser value
             * @property {number} DCTGeneral=2 DCTGeneral value
             */
            CNotifyDataChange.type = (function () {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DCTInvalid"] = 0;
                values[valuesById[1] = "DCTUser"] = 1;
                values[valuesById[2] = "DCTGeneral"] = 2;
                return values;
            })();
            return CNotifyDataChange;
        })();
        cmsg.CReqUseSkill = (function () {
            /**
             * Properties of a CReqUseSkill.
             * @memberof cmsg
             * @interface ICReqUseSkill
             * @property {number|null} [skillID] CReqUseSkill skillID
             */
            /**
             * Constructs a new CReqUseSkill.
             * @memberof cmsg
             * @classdesc Represents a CReqUseSkill.
             * @implements ICReqUseSkill
             * @constructor
             * @param {cmsg.ICReqUseSkill=} [properties] Properties to set
             */
            function CReqUseSkill(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqUseSkill skillID.
             * @member {number} skillID
             * @memberof cmsg.CReqUseSkill
             * @instance
             */
            CReqUseSkill.prototype.skillID = 0;
            /**
             * Creates a new CReqUseSkill instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {cmsg.ICReqUseSkill=} [properties] Properties to set
             * @returns {cmsg.CReqUseSkill} CReqUseSkill instance
             */
            CReqUseSkill.create = function create(properties) {
                return new CReqUseSkill(properties);
            };
            /**
             * Encodes the specified CReqUseSkill message. Does not implicitly {@link cmsg.CReqUseSkill.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {cmsg.ICReqUseSkill} message CReqUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqUseSkill.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.skillID);
                return writer;
            };
            /**
             * Encodes the specified CReqUseSkill message, length delimited. Does not implicitly {@link cmsg.CReqUseSkill.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {cmsg.ICReqUseSkill} message CReqUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqUseSkill.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqUseSkill message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqUseSkill} CReqUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqUseSkill.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqUseSkill();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.skillID = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqUseSkill message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqUseSkill} CReqUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqUseSkill.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqUseSkill message.
             * @function verify
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqUseSkill.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    if (!$util.isInteger(message.skillID))
                        return "skillID: integer expected";
                return null;
            };
            /**
             * Creates a CReqUseSkill message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqUseSkill} CReqUseSkill
             */
            CReqUseSkill.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqUseSkill)
                    return object;
                var message = new $root.cmsg.CReqUseSkill();
                if (object.skillID != null)
                    message.skillID = object.skillID >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CReqUseSkill message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqUseSkill
             * @static
             * @param {cmsg.CReqUseSkill} message CReqUseSkill
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqUseSkill.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.skillID = 0;
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    object.skillID = message.skillID;
                return object;
            };
            /**
             * Converts this CReqUseSkill to JSON.
             * @function toJSON
             * @memberof cmsg.CReqUseSkill
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqUseSkill.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqUseSkill;
        })();
        cmsg.CRespUseSkill = (function () {
            /**
             * Properties of a CRespUseSkill.
             * @memberof cmsg
             * @interface ICRespUseSkill
             * @property {number|null} [errCode] CRespUseSkill errCode
             * @property {string|null} [errMsg] CRespUseSkill errMsg
             * @property {number|null} [skillID] CRespUseSkill skillID
             */
            /**
             * Constructs a new CRespUseSkill.
             * @memberof cmsg
             * @classdesc Represents a CRespUseSkill.
             * @implements ICRespUseSkill
             * @constructor
             * @param {cmsg.ICRespUseSkill=} [properties] Properties to set
             */
            function CRespUseSkill(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespUseSkill errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespUseSkill
             * @instance
             */
            CRespUseSkill.prototype.errCode = 0;
            /**
             * CRespUseSkill errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespUseSkill
             * @instance
             */
            CRespUseSkill.prototype.errMsg = "";
            /**
             * CRespUseSkill skillID.
             * @member {number} skillID
             * @memberof cmsg.CRespUseSkill
             * @instance
             */
            CRespUseSkill.prototype.skillID = 0;
            /**
             * Creates a new CRespUseSkill instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {cmsg.ICRespUseSkill=} [properties] Properties to set
             * @returns {cmsg.CRespUseSkill} CRespUseSkill instance
             */
            CRespUseSkill.create = function create(properties) {
                return new CRespUseSkill(properties);
            };
            /**
             * Encodes the specified CRespUseSkill message. Does not implicitly {@link cmsg.CRespUseSkill.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {cmsg.ICRespUseSkill} message CRespUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespUseSkill.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.skillID);
                return writer;
            };
            /**
             * Encodes the specified CRespUseSkill message, length delimited. Does not implicitly {@link cmsg.CRespUseSkill.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {cmsg.ICRespUseSkill} message CRespUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespUseSkill.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespUseSkill message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespUseSkill} CRespUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespUseSkill.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespUseSkill();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        case 3:
                            message.skillID = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespUseSkill message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespUseSkill} CRespUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespUseSkill.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespUseSkill message.
             * @function verify
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespUseSkill.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    if (!$util.isInteger(message.skillID))
                        return "skillID: integer expected";
                return null;
            };
            /**
             * Creates a CRespUseSkill message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespUseSkill} CRespUseSkill
             */
            CRespUseSkill.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespUseSkill)
                    return object;
                var message = new $root.cmsg.CRespUseSkill();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.skillID != null)
                    message.skillID = object.skillID >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CRespUseSkill message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespUseSkill
             * @static
             * @param {cmsg.CRespUseSkill} message CRespUseSkill
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespUseSkill.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                    object.skillID = 0;
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    object.skillID = message.skillID;
                return object;
            };
            /**
             * Converts this CRespUseSkill to JSON.
             * @function toJSON
             * @memberof cmsg.CRespUseSkill
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespUseSkill.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespUseSkill;
        })();
        cmsg.CNotifyUseSkill = (function () {
            /**
             * Properties of a CNotifyUseSkill.
             * @memberof cmsg
             * @interface ICNotifyUseSkill
             * @property {number|Long|null} [userID] CNotifyUseSkill userID
             * @property {number|null} [skillID] CNotifyUseSkill skillID
             */
            /**
             * Constructs a new CNotifyUseSkill.
             * @memberof cmsg
             * @classdesc Represents a CNotifyUseSkill.
             * @implements ICNotifyUseSkill
             * @constructor
             * @param {cmsg.ICNotifyUseSkill=} [properties] Properties to set
             */
            function CNotifyUseSkill(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyUseSkill userID.
             * @member {number|Long} userID
             * @memberof cmsg.CNotifyUseSkill
             * @instance
             */
            CNotifyUseSkill.prototype.userID = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * CNotifyUseSkill skillID.
             * @member {number} skillID
             * @memberof cmsg.CNotifyUseSkill
             * @instance
             */
            CNotifyUseSkill.prototype.skillID = 0;
            /**
             * Creates a new CNotifyUseSkill instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {cmsg.ICNotifyUseSkill=} [properties] Properties to set
             * @returns {cmsg.CNotifyUseSkill} CNotifyUseSkill instance
             */
            CNotifyUseSkill.create = function create(properties) {
                return new CNotifyUseSkill(properties);
            };
            /**
             * Encodes the specified CNotifyUseSkill message. Does not implicitly {@link cmsg.CNotifyUseSkill.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {cmsg.ICNotifyUseSkill} message CNotifyUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyUseSkill.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userID != null && message.hasOwnProperty("userID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.userID);
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.skillID);
                return writer;
            };
            /**
             * Encodes the specified CNotifyUseSkill message, length delimited. Does not implicitly {@link cmsg.CNotifyUseSkill.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {cmsg.ICNotifyUseSkill} message CNotifyUseSkill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyUseSkill.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyUseSkill message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyUseSkill} CNotifyUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyUseSkill.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyUseSkill();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.userID = reader.uint64();
                            break;
                        case 2:
                            message.skillID = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyUseSkill message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyUseSkill} CNotifyUseSkill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyUseSkill.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyUseSkill message.
             * @function verify
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyUseSkill.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (!$util.isInteger(message.userID) && !(message.userID && $util.isInteger(message.userID.low) && $util.isInteger(message.userID.high)))
                        return "userID: integer|Long expected";
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    if (!$util.isInteger(message.skillID))
                        return "skillID: integer expected";
                return null;
            };
            /**
             * Creates a CNotifyUseSkill message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyUseSkill} CNotifyUseSkill
             */
            CNotifyUseSkill.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyUseSkill)
                    return object;
                var message = new $root.cmsg.CNotifyUseSkill();
                if (object.userID != null)
                    if ($util.Long)
                        (message.userID = $util.Long.fromValue(object.userID)).unsigned = true;
                    else if (typeof object.userID === "string")
                        message.userID = parseInt(object.userID, 10);
                    else if (typeof object.userID === "number")
                        message.userID = object.userID;
                    else if (typeof object.userID === "object")
                        message.userID = new $util.LongBits(object.userID.low >>> 0, object.userID.high >>> 0).toNumber(true);
                if (object.skillID != null)
                    message.skillID = object.skillID >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CNotifyUseSkill message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyUseSkill
             * @static
             * @param {cmsg.CNotifyUseSkill} message CNotifyUseSkill
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyUseSkill.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.userID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.userID = options.longs === String ? "0" : 0;
                    object.skillID = 0;
                }
                if (message.userID != null && message.hasOwnProperty("userID"))
                    if (typeof message.userID === "number")
                        object.userID = options.longs === String ? String(message.userID) : message.userID;
                    else
                        object.userID = options.longs === String ? $util.Long.prototype.toString.call(message.userID) : options.longs === Number ? new $util.LongBits(message.userID.low >>> 0, message.userID.high >>> 0).toNumber(true) : message.userID;
                if (message.skillID != null && message.hasOwnProperty("skillID"))
                    object.skillID = message.skillID;
                return object;
            };
            /**
             * Converts this CNotifyUseSkill to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyUseSkill
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyUseSkill.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyUseSkill;
        })();
        cmsg.CNotifyGameStart = (function () {
            /**
             * Properties of a CNotifyGameStart.
             * @memberof cmsg
             * @interface ICNotifyGameStart
             * @property {Array.<gamedef.IGameGeneral>|null} [generals] CNotifyGameStart generals
             */
            /**
             * Constructs a new CNotifyGameStart.
             * @memberof cmsg
             * @classdesc Represents a CNotifyGameStart.
             * @implements ICNotifyGameStart
             * @constructor
             * @param {cmsg.ICNotifyGameStart=} [properties] Properties to set
             */
            function CNotifyGameStart(properties) {
                this.generals = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyGameStart generals.
             * @member {Array.<gamedef.IGameGeneral>} generals
             * @memberof cmsg.CNotifyGameStart
             * @instance
             */
            CNotifyGameStart.prototype.generals = $util.emptyArray;
            /**
             * Creates a new CNotifyGameStart instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {cmsg.ICNotifyGameStart=} [properties] Properties to set
             * @returns {cmsg.CNotifyGameStart} CNotifyGameStart instance
             */
            CNotifyGameStart.create = function create(properties) {
                return new CNotifyGameStart(properties);
            };
            /**
             * Encodes the specified CNotifyGameStart message. Does not implicitly {@link cmsg.CNotifyGameStart.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {cmsg.ICNotifyGameStart} message CNotifyGameStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameStart.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.generals != null && message.generals.length)
                    for (var i = 0; i < message.generals.length; ++i)
                        $root.gamedef.GameGeneral.encode(message.generals[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CNotifyGameStart message, length delimited. Does not implicitly {@link cmsg.CNotifyGameStart.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {cmsg.ICNotifyGameStart} message CNotifyGameStart message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameStart.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyGameStart message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyGameStart} CNotifyGameStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameStart.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyGameStart();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            if (!(message.generals && message.generals.length))
                                message.generals = [];
                            message.generals.push($root.gamedef.GameGeneral.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyGameStart message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyGameStart} CNotifyGameStart
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameStart.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyGameStart message.
             * @function verify
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyGameStart.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.generals != null && message.hasOwnProperty("generals")) {
                    if (!Array.isArray(message.generals))
                        return "generals: array expected";
                    for (var i = 0; i < message.generals.length; ++i) {
                        var error = $root.gamedef.GameGeneral.verify(message.generals[i]);
                        if (error)
                            return "generals." + error;
                    }
                }
                return null;
            };
            /**
             * Creates a CNotifyGameStart message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyGameStart} CNotifyGameStart
             */
            CNotifyGameStart.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyGameStart)
                    return object;
                var message = new $root.cmsg.CNotifyGameStart();
                if (object.generals) {
                    if (!Array.isArray(object.generals))
                        throw TypeError(".cmsg.CNotifyGameStart.generals: array expected");
                    message.generals = [];
                    for (var i = 0; i < object.generals.length; ++i) {
                        if (typeof object.generals[i] !== "object")
                            throw TypeError(".cmsg.CNotifyGameStart.generals: object expected");
                        message.generals[i] = $root.gamedef.GameGeneral.fromObject(object.generals[i]);
                    }
                }
                return message;
            };
            /**
             * Creates a plain object from a CNotifyGameStart message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyGameStart
             * @static
             * @param {cmsg.CNotifyGameStart} message CNotifyGameStart
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyGameStart.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.generals = [];
                if (message.generals && message.generals.length) {
                    object.generals = [];
                    for (var j = 0; j < message.generals.length; ++j)
                        object.generals[j] = $root.gamedef.GameGeneral.toObject(message.generals[j], options);
                }
                return object;
            };
            /**
             * Converts this CNotifyGameStart to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyGameStart
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyGameStart.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyGameStart;
        })();
        cmsg.CNotifyGeneralStatus = (function () {
            /**
             * Properties of a CNotifyGeneralStatus.
             * @memberof cmsg
             * @interface ICNotifyGeneralStatus
             * @property {gamedef.IGameGeneral|null} [gameGeneral] CNotifyGeneralStatus gameGeneral
             */
            /**
             * Constructs a new CNotifyGeneralStatus.
             * @memberof cmsg
             * @classdesc Represents a CNotifyGeneralStatus.
             * @implements ICNotifyGeneralStatus
             * @constructor
             * @param {cmsg.ICNotifyGeneralStatus=} [properties] Properties to set
             */
            function CNotifyGeneralStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyGeneralStatus gameGeneral.
             * @member {gamedef.IGameGeneral|null|undefined} gameGeneral
             * @memberof cmsg.CNotifyGeneralStatus
             * @instance
             */
            CNotifyGeneralStatus.prototype.gameGeneral = null;
            /**
             * Creates a new CNotifyGeneralStatus instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {cmsg.ICNotifyGeneralStatus=} [properties] Properties to set
             * @returns {cmsg.CNotifyGeneralStatus} CNotifyGeneralStatus instance
             */
            CNotifyGeneralStatus.create = function create(properties) {
                return new CNotifyGeneralStatus(properties);
            };
            /**
             * Encodes the specified CNotifyGeneralStatus message. Does not implicitly {@link cmsg.CNotifyGeneralStatus.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {cmsg.ICNotifyGeneralStatus} message CNotifyGeneralStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGeneralStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.gameGeneral != null && message.hasOwnProperty("gameGeneral"))
                    $root.gamedef.GameGeneral.encode(message.gameGeneral, writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
                return writer;
            };
            /**
             * Encodes the specified CNotifyGeneralStatus message, length delimited. Does not implicitly {@link cmsg.CNotifyGeneralStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {cmsg.ICNotifyGeneralStatus} message CNotifyGeneralStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGeneralStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyGeneralStatus message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyGeneralStatus} CNotifyGeneralStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGeneralStatus.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyGeneralStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.gameGeneral = $root.gamedef.GameGeneral.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyGeneralStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyGeneralStatus} CNotifyGeneralStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGeneralStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyGeneralStatus message.
             * @function verify
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyGeneralStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.gameGeneral != null && message.hasOwnProperty("gameGeneral")) {
                    var error = $root.gamedef.GameGeneral.verify(message.gameGeneral);
                    if (error)
                        return "gameGeneral." + error;
                }
                return null;
            };
            /**
             * Creates a CNotifyGeneralStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyGeneralStatus} CNotifyGeneralStatus
             */
            CNotifyGeneralStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyGeneralStatus)
                    return object;
                var message = new $root.cmsg.CNotifyGeneralStatus();
                if (object.gameGeneral != null) {
                    if (typeof object.gameGeneral !== "object")
                        throw TypeError(".cmsg.CNotifyGeneralStatus.gameGeneral: object expected");
                    message.gameGeneral = $root.gamedef.GameGeneral.fromObject(object.gameGeneral);
                }
                return message;
            };
            /**
             * Creates a plain object from a CNotifyGeneralStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyGeneralStatus
             * @static
             * @param {cmsg.CNotifyGeneralStatus} message CNotifyGeneralStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyGeneralStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.gameGeneral = null;
                if (message.gameGeneral != null && message.hasOwnProperty("gameGeneral"))
                    object.gameGeneral = $root.gamedef.GameGeneral.toObject(message.gameGeneral, options);
                return object;
            };
            /**
             * Converts this CNotifyGeneralStatus to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyGeneralStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyGeneralStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyGeneralStatus;
        })();
        cmsg.CNotifyGameStage = (function () {
            /**
             * Properties of a CNotifyGameStage.
             * @memberof cmsg
             * @interface ICNotifyGameStage
             * @property {gamedef.GameStageTyp|null} [stage] CNotifyGameStage stage
             * @property {number|null} [lastTime] CNotifyGameStage lastTime
             */
            /**
             * Constructs a new CNotifyGameStage.
             * @memberof cmsg
             * @classdesc Represents a CNotifyGameStage.
             * @implements ICNotifyGameStage
             * @constructor
             * @param {cmsg.ICNotifyGameStage=} [properties] Properties to set
             */
            function CNotifyGameStage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyGameStage stage.
             * @member {gamedef.GameStageTyp} stage
             * @memberof cmsg.CNotifyGameStage
             * @instance
             */
            CNotifyGameStage.prototype.stage = 0;
            /**
             * CNotifyGameStage lastTime.
             * @member {number} lastTime
             * @memberof cmsg.CNotifyGameStage
             * @instance
             */
            CNotifyGameStage.prototype.lastTime = 0;
            /**
             * Creates a new CNotifyGameStage instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {cmsg.ICNotifyGameStage=} [properties] Properties to set
             * @returns {cmsg.CNotifyGameStage} CNotifyGameStage instance
             */
            CNotifyGameStage.create = function create(properties) {
                return new CNotifyGameStage(properties);
            };
            /**
             * Encodes the specified CNotifyGameStage message. Does not implicitly {@link cmsg.CNotifyGameStage.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {cmsg.ICNotifyGameStage} message CNotifyGameStage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameStage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stage != null && message.hasOwnProperty("stage"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.stage);
                if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.lastTime);
                return writer;
            };
            /**
             * Encodes the specified CNotifyGameStage message, length delimited. Does not implicitly {@link cmsg.CNotifyGameStage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {cmsg.ICNotifyGameStage} message CNotifyGameStage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameStage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyGameStage message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyGameStage} CNotifyGameStage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameStage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyGameStage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.stage = reader.int32();
                            break;
                        case 2:
                            message.lastTime = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyGameStage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyGameStage} CNotifyGameStage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameStage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyGameStage message.
             * @function verify
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyGameStage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stage != null && message.hasOwnProperty("stage"))
                    switch (message.stage) {
                        default:
                            return "stage: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                    }
                if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                    if (!$util.isInteger(message.lastTime))
                        return "lastTime: integer expected";
                return null;
            };
            /**
             * Creates a CNotifyGameStage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyGameStage} CNotifyGameStage
             */
            CNotifyGameStage.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyGameStage)
                    return object;
                var message = new $root.cmsg.CNotifyGameStage();
                switch (object.stage) {
                    case "GSTInvalid":
                    case 0:
                        message.stage = 0;
                        break;
                    case "GSTChoose":
                    case 1:
                        message.stage = 1;
                        break;
                    case "GSTAction":
                    case 2:
                        message.stage = 2;
                        break;
                }
                if (object.lastTime != null)
                    message.lastTime = object.lastTime | 0;
                return message;
            };
            /**
             * Creates a plain object from a CNotifyGameStage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyGameStage
             * @static
             * @param {cmsg.CNotifyGameStage} message CNotifyGameStage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyGameStage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.stage = options.enums === String ? "GSTInvalid" : 0;
                    object.lastTime = 0;
                }
                if (message.stage != null && message.hasOwnProperty("stage"))
                    object.stage = options.enums === String ? $root.gamedef.GameStageTyp[message.stage] : message.stage;
                if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                    object.lastTime = message.lastTime;
                return object;
            };
            /**
             * Converts this CNotifyGameStage to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyGameStage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyGameStage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyGameStage;
        })();
        cmsg.CNotifyGameResult = (function () {
            /**
             * Properties of a CNotifyGameResult.
             * @memberof cmsg
             * @interface ICNotifyGameResult
             * @property {number|Long|null} [winner] CNotifyGameResult winner
             * @property {number|null} [exp] CNotifyGameResult exp
             */
            /**
             * Constructs a new CNotifyGameResult.
             * @memberof cmsg
             * @classdesc Represents a CNotifyGameResult.
             * @implements ICNotifyGameResult
             * @constructor
             * @param {cmsg.ICNotifyGameResult=} [properties] Properties to set
             */
            function CNotifyGameResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CNotifyGameResult winner.
             * @member {number|Long} winner
             * @memberof cmsg.CNotifyGameResult
             * @instance
             */
            CNotifyGameResult.prototype.winner = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
            /**
             * CNotifyGameResult exp.
             * @member {number} exp
             * @memberof cmsg.CNotifyGameResult
             * @instance
             */
            CNotifyGameResult.prototype.exp = 0;
            /**
             * Creates a new CNotifyGameResult instance using the specified properties.
             * @function create
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {cmsg.ICNotifyGameResult=} [properties] Properties to set
             * @returns {cmsg.CNotifyGameResult} CNotifyGameResult instance
             */
            CNotifyGameResult.create = function create(properties) {
                return new CNotifyGameResult(properties);
            };
            /**
             * Encodes the specified CNotifyGameResult message. Does not implicitly {@link cmsg.CNotifyGameResult.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {cmsg.ICNotifyGameResult} message CNotifyGameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.winner != null && message.hasOwnProperty("winner"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.winner);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.exp);
                return writer;
            };
            /**
             * Encodes the specified CNotifyGameResult message, length delimited. Does not implicitly {@link cmsg.CNotifyGameResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {cmsg.ICNotifyGameResult} message CNotifyGameResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CNotifyGameResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CNotifyGameResult message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CNotifyGameResult} CNotifyGameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CNotifyGameResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.winner = reader.uint64();
                            break;
                        case 2:
                            message.exp = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CNotifyGameResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CNotifyGameResult} CNotifyGameResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CNotifyGameResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CNotifyGameResult message.
             * @function verify
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CNotifyGameResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.winner != null && message.hasOwnProperty("winner"))
                    if (!$util.isInteger(message.winner) && !(message.winner && $util.isInteger(message.winner.low) && $util.isInteger(message.winner.high)))
                        return "winner: integer|Long expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isInteger(message.exp))
                        return "exp: integer expected";
                return null;
            };
            /**
             * Creates a CNotifyGameResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CNotifyGameResult} CNotifyGameResult
             */
            CNotifyGameResult.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CNotifyGameResult)
                    return object;
                var message = new $root.cmsg.CNotifyGameResult();
                if (object.winner != null)
                    if ($util.Long)
                        (message.winner = $util.Long.fromValue(object.winner)).unsigned = true;
                    else if (typeof object.winner === "string")
                        message.winner = parseInt(object.winner, 10);
                    else if (typeof object.winner === "number")
                        message.winner = object.winner;
                    else if (typeof object.winner === "object")
                        message.winner = new $util.LongBits(object.winner.low >>> 0, object.winner.high >>> 0).toNumber(true);
                if (object.exp != null)
                    message.exp = object.exp | 0;
                return message;
            };
            /**
             * Creates a plain object from a CNotifyGameResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CNotifyGameResult
             * @static
             * @param {cmsg.CNotifyGameResult} message CNotifyGameResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CNotifyGameResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.winner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    }
                    else
                        object.winner = options.longs === String ? "0" : 0;
                    object.exp = 0;
                }
                if (message.winner != null && message.hasOwnProperty("winner"))
                    if (typeof message.winner === "number")
                        object.winner = options.longs === String ? String(message.winner) : message.winner;
                    else
                        object.winner = options.longs === String ? $util.Long.prototype.toString.call(message.winner) : options.longs === Number ? new $util.LongBits(message.winner.low >>> 0, message.winner.high >>> 0).toNumber(true) : message.winner;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                return object;
            };
            /**
             * Converts this CNotifyGameResult to JSON.
             * @function toJSON
             * @memberof cmsg.CNotifyGameResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CNotifyGameResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CNotifyGameResult;
        })();
        cmsg.CReqUserInit = (function () {
            /**
             * Properties of a CReqUserInit.
             * @memberof cmsg
             * @interface ICReqUserInit
             * @property {string|null} [nickName] CReqUserInit nickName
             * @property {number|null} [firstGeneral] CReqUserInit firstGeneral
             */
            /**
             * Constructs a new CReqUserInit.
             * @memberof cmsg
             * @classdesc Represents a CReqUserInit.
             * @implements ICReqUserInit
             * @constructor
             * @param {cmsg.ICReqUserInit=} [properties] Properties to set
             */
            function CReqUserInit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqUserInit nickName.
             * @member {string} nickName
             * @memberof cmsg.CReqUserInit
             * @instance
             */
            CReqUserInit.prototype.nickName = "";
            /**
             * CReqUserInit firstGeneral.
             * @member {number} firstGeneral
             * @memberof cmsg.CReqUserInit
             * @instance
             */
            CReqUserInit.prototype.firstGeneral = 0;
            /**
             * Creates a new CReqUserInit instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {cmsg.ICReqUserInit=} [properties] Properties to set
             * @returns {cmsg.CReqUserInit} CReqUserInit instance
             */
            CReqUserInit.create = function create(properties) {
                return new CReqUserInit(properties);
            };
            /**
             * Encodes the specified CReqUserInit message. Does not implicitly {@link cmsg.CReqUserInit.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {cmsg.ICReqUserInit} message CReqUserInit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqUserInit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.nickName);
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    writer.uint32(/* id 2, wireType 0 =*/ 16).uint32(message.firstGeneral);
                return writer;
            };
            /**
             * Encodes the specified CReqUserInit message, length delimited. Does not implicitly {@link cmsg.CReqUserInit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {cmsg.ICReqUserInit} message CReqUserInit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqUserInit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqUserInit message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqUserInit} CReqUserInit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqUserInit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqUserInit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.nickName = reader.string();
                            break;
                        case 2:
                            message.firstGeneral = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqUserInit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqUserInit} CReqUserInit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqUserInit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqUserInit message.
             * @function verify
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqUserInit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    if (!$util.isString(message.nickName))
                        return "nickName: string expected";
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    if (!$util.isInteger(message.firstGeneral))
                        return "firstGeneral: integer expected";
                return null;
            };
            /**
             * Creates a CReqUserInit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqUserInit} CReqUserInit
             */
            CReqUserInit.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqUserInit)
                    return object;
                var message = new $root.cmsg.CReqUserInit();
                if (object.nickName != null)
                    message.nickName = String(object.nickName);
                if (object.firstGeneral != null)
                    message.firstGeneral = object.firstGeneral >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CReqUserInit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqUserInit
             * @static
             * @param {cmsg.CReqUserInit} message CReqUserInit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqUserInit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.nickName = "";
                    object.firstGeneral = 0;
                }
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    object.nickName = message.nickName;
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    object.firstGeneral = message.firstGeneral;
                return object;
            };
            /**
             * Converts this CReqUserInit to JSON.
             * @function toJSON
             * @memberof cmsg.CReqUserInit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqUserInit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqUserInit;
        })();
        cmsg.CRespUserInit = (function () {
            /**
             * Properties of a CRespUserInit.
             * @memberof cmsg
             * @interface ICRespUserInit
             * @property {number|null} [errCode] CRespUserInit errCode
             * @property {string|null} [errMsg] CRespUserInit errMsg
             * @property {string|null} [nickName] CRespUserInit nickName
             * @property {number|null} [firstGeneral] CRespUserInit firstGeneral
             */
            /**
             * Constructs a new CRespUserInit.
             * @memberof cmsg
             * @classdesc Represents a CRespUserInit.
             * @implements ICRespUserInit
             * @constructor
             * @param {cmsg.ICRespUserInit=} [properties] Properties to set
             */
            function CRespUserInit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespUserInit errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespUserInit
             * @instance
             */
            CRespUserInit.prototype.errCode = 0;
            /**
             * CRespUserInit errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespUserInit
             * @instance
             */
            CRespUserInit.prototype.errMsg = "";
            /**
             * CRespUserInit nickName.
             * @member {string} nickName
             * @memberof cmsg.CRespUserInit
             * @instance
             */
            CRespUserInit.prototype.nickName = "";
            /**
             * CRespUserInit firstGeneral.
             * @member {number} firstGeneral
             * @memberof cmsg.CRespUserInit
             * @instance
             */
            CRespUserInit.prototype.firstGeneral = 0;
            /**
             * Creates a new CRespUserInit instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {cmsg.ICRespUserInit=} [properties] Properties to set
             * @returns {cmsg.CRespUserInit} CRespUserInit instance
             */
            CRespUserInit.create = function create(properties) {
                return new CRespUserInit(properties);
            };
            /**
             * Encodes the specified CRespUserInit message. Does not implicitly {@link cmsg.CRespUserInit.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {cmsg.ICRespUserInit} message CRespUserInit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespUserInit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.nickName);
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.firstGeneral);
                return writer;
            };
            /**
             * Encodes the specified CRespUserInit message, length delimited. Does not implicitly {@link cmsg.CRespUserInit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {cmsg.ICRespUserInit} message CRespUserInit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespUserInit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespUserInit message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespUserInit} CRespUserInit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespUserInit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespUserInit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        case 3:
                            message.nickName = reader.string();
                            break;
                        case 4:
                            message.firstGeneral = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespUserInit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespUserInit} CRespUserInit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespUserInit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespUserInit message.
             * @function verify
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespUserInit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    if (!$util.isString(message.nickName))
                        return "nickName: string expected";
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    if (!$util.isInteger(message.firstGeneral))
                        return "firstGeneral: integer expected";
                return null;
            };
            /**
             * Creates a CRespUserInit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespUserInit} CRespUserInit
             */
            CRespUserInit.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespUserInit)
                    return object;
                var message = new $root.cmsg.CRespUserInit();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.nickName != null)
                    message.nickName = String(object.nickName);
                if (object.firstGeneral != null)
                    message.firstGeneral = object.firstGeneral >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CRespUserInit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespUserInit
             * @static
             * @param {cmsg.CRespUserInit} message CRespUserInit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespUserInit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                    object.nickName = "";
                    object.firstGeneral = 0;
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.nickName != null && message.hasOwnProperty("nickName"))
                    object.nickName = message.nickName;
                if (message.firstGeneral != null && message.hasOwnProperty("firstGeneral"))
                    object.firstGeneral = message.firstGeneral;
                return object;
            };
            /**
             * Converts this CRespUserInit to JSON.
             * @function toJSON
             * @memberof cmsg.CRespUserInit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespUserInit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespUserInit;
        })();
        cmsg.CReqStageFight = (function () {
            /**
             * Properties of a CReqStageFight.
             * @memberof cmsg
             * @interface ICReqStageFight
             * @property {number|null} [stageID] CReqStageFight stageID
             */
            /**
             * Constructs a new CReqStageFight.
             * @memberof cmsg
             * @classdesc Represents a CReqStageFight.
             * @implements ICReqStageFight
             * @constructor
             * @param {cmsg.ICReqStageFight=} [properties] Properties to set
             */
            function CReqStageFight(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CReqStageFight stageID.
             * @member {number} stageID
             * @memberof cmsg.CReqStageFight
             * @instance
             */
            CReqStageFight.prototype.stageID = 0;
            /**
             * Creates a new CReqStageFight instance using the specified properties.
             * @function create
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {cmsg.ICReqStageFight=} [properties] Properties to set
             * @returns {cmsg.CReqStageFight} CReqStageFight instance
             */
            CReqStageFight.create = function create(properties) {
                return new CReqStageFight(properties);
            };
            /**
             * Encodes the specified CReqStageFight message. Does not implicitly {@link cmsg.CReqStageFight.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {cmsg.ICReqStageFight} message CReqStageFight message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqStageFight.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stageID != null && message.hasOwnProperty("stageID"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.stageID);
                return writer;
            };
            /**
             * Encodes the specified CReqStageFight message, length delimited. Does not implicitly {@link cmsg.CReqStageFight.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {cmsg.ICReqStageFight} message CReqStageFight message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CReqStageFight.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CReqStageFight message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CReqStageFight} CReqStageFight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqStageFight.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CReqStageFight();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.stageID = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CReqStageFight message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CReqStageFight} CReqStageFight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CReqStageFight.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CReqStageFight message.
             * @function verify
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CReqStageFight.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stageID != null && message.hasOwnProperty("stageID"))
                    if (!$util.isInteger(message.stageID))
                        return "stageID: integer expected";
                return null;
            };
            /**
             * Creates a CReqStageFight message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CReqStageFight} CReqStageFight
             */
            CReqStageFight.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CReqStageFight)
                    return object;
                var message = new $root.cmsg.CReqStageFight();
                if (object.stageID != null)
                    message.stageID = object.stageID >>> 0;
                return message;
            };
            /**
             * Creates a plain object from a CReqStageFight message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CReqStageFight
             * @static
             * @param {cmsg.CReqStageFight} message CReqStageFight
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CReqStageFight.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.stageID = 0;
                if (message.stageID != null && message.hasOwnProperty("stageID"))
                    object.stageID = message.stageID;
                return object;
            };
            /**
             * Converts this CReqStageFight to JSON.
             * @function toJSON
             * @memberof cmsg.CReqStageFight
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CReqStageFight.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CReqStageFight;
        })();
        cmsg.CRespStageFight = (function () {
            /**
             * Properties of a CRespStageFight.
             * @memberof cmsg
             * @interface ICRespStageFight
             * @property {number|null} [errCode] CRespStageFight errCode
             * @property {string|null} [errMsg] CRespStageFight errMsg
             */
            /**
             * Constructs a new CRespStageFight.
             * @memberof cmsg
             * @classdesc Represents a CRespStageFight.
             * @implements ICRespStageFight
             * @constructor
             * @param {cmsg.ICRespStageFight=} [properties] Properties to set
             */
            function CRespStageFight(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            /**
             * CRespStageFight errCode.
             * @member {number} errCode
             * @memberof cmsg.CRespStageFight
             * @instance
             */
            CRespStageFight.prototype.errCode = 0;
            /**
             * CRespStageFight errMsg.
             * @member {string} errMsg
             * @memberof cmsg.CRespStageFight
             * @instance
             */
            CRespStageFight.prototype.errMsg = "";
            /**
             * Creates a new CRespStageFight instance using the specified properties.
             * @function create
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {cmsg.ICRespStageFight=} [properties] Properties to set
             * @returns {cmsg.CRespStageFight} CRespStageFight instance
             */
            CRespStageFight.create = function create(properties) {
                return new CRespStageFight(properties);
            };
            /**
             * Encodes the specified CRespStageFight message. Does not implicitly {@link cmsg.CRespStageFight.verify|verify} messages.
             * @function encode
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {cmsg.ICRespStageFight} message CRespStageFight message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespStageFight.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.errCode);
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.errMsg);
                return writer;
            };
            /**
             * Encodes the specified CRespStageFight message, length delimited. Does not implicitly {@link cmsg.CRespStageFight.verify|verify} messages.
             * @function encodeDelimited
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {cmsg.ICRespStageFight} message CRespStageFight message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CRespStageFight.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
            /**
             * Decodes a CRespStageFight message from the specified reader or buffer.
             * @function decode
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {cmsg.CRespStageFight} CRespStageFight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespStageFight.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cmsg.CRespStageFight();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            message.errCode = reader.uint32();
                            break;
                        case 2:
                            message.errMsg = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return message;
            };
            /**
             * Decodes a CRespStageFight message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {cmsg.CRespStageFight} CRespStageFight
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CRespStageFight.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
            /**
             * Verifies a CRespStageFight message.
             * @function verify
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CRespStageFight.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };
            /**
             * Creates a CRespStageFight message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {cmsg.CRespStageFight} CRespStageFight
             */
            CRespStageFight.fromObject = function fromObject(object) {
                if (object instanceof $root.cmsg.CRespStageFight)
                    return object;
                var message = new $root.cmsg.CRespStageFight();
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };
            /**
             * Creates a plain object from a CRespStageFight message. Also converts values to other types if specified.
             * @function toObject
             * @memberof cmsg.CRespStageFight
             * @static
             * @param {cmsg.CRespStageFight} message CRespStageFight
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CRespStageFight.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };
            /**
             * Converts this CRespStageFight to JSON.
             * @function toJSON
             * @memberof cmsg.CRespStageFight
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CRespStageFight.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
            return CRespStageFight;
        })();
        return cmsg;
    })();
    return $root;
})(protobuf);
//# sourceMappingURL=protocol.js.map