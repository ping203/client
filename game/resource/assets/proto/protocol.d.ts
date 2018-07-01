import * as $protobuf from "protobufjs";

/** Namespace gameconf. */
export namespace gameconf {

    /** SkillTyp enum. */
    enum SkillTyp {
        STInvalid = 0,
        STNormal = 1,
        STFire = 2,
        STWater = 3,
        STGrass = 4
    }

    /** SkillAttackTyp enum. */
    enum SkillAttackTyp {
        SATInvliad = 0,
        SATAttack = 1,
        SATSpecial = 2,
        SATChange = 3
    }

    /** SkillEffectObjectTyp enum. */
    enum SkillEffectObjectTyp {
        SEOTInvalid = 0,
        SEOTSelf = 1,
        SEOTOpponent = 2
    }

    /** SkillEffectTyp enum. */
    enum SkillEffectTyp {
        SETInvliad = 0,
        SETFire = 1,
        SETAttack = 2
    }

    /** Properties of a DoNotUseThis. */
    interface IDoNotUseThis {

        /** DoNotUseThis DoNotUseThis */
        DoNotUseThis?: (gameconf.IDoNotUseThisDefine[]|null);
    }

    /** Represents a DoNotUseThis. */
    class DoNotUseThis implements IDoNotUseThis {

        /**
         * Constructs a new DoNotUseThis.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameconf.IDoNotUseThis);

        /** DoNotUseThis DoNotUseThis. */
        public DoNotUseThis: gameconf.IDoNotUseThisDefine[];

        /**
         * Creates a new DoNotUseThis instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoNotUseThis instance
         */
        public static create(properties?: gameconf.IDoNotUseThis): gameconf.DoNotUseThis;

        /**
         * Encodes the specified DoNotUseThis message. Does not implicitly {@link gameconf.DoNotUseThis.verify|verify} messages.
         * @param message DoNotUseThis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameconf.IDoNotUseThis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoNotUseThis message, length delimited. Does not implicitly {@link gameconf.DoNotUseThis.verify|verify} messages.
         * @param message DoNotUseThis message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameconf.IDoNotUseThis, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoNotUseThis message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoNotUseThis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameconf.DoNotUseThis;

        /**
         * Decodes a DoNotUseThis message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoNotUseThis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameconf.DoNotUseThis;

        /**
         * Verifies a DoNotUseThis message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DoNotUseThis message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoNotUseThis
         */
        public static fromObject(object: { [k: string]: any }): gameconf.DoNotUseThis;

        /**
         * Creates a plain object from a DoNotUseThis message. Also converts values to other types if specified.
         * @param message DoNotUseThis
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameconf.DoNotUseThis, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoNotUseThis to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DoNotUseThisDefine. */
    interface IDoNotUseThisDefine {

        /** DoNotUseThisDefine ConfID */
        ConfID?: (number|null);
    }

    /** Represents a DoNotUseThisDefine. */
    class DoNotUseThisDefine implements IDoNotUseThisDefine {

        /**
         * Constructs a new DoNotUseThisDefine.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameconf.IDoNotUseThisDefine);

        /** DoNotUseThisDefine ConfID. */
        public ConfID: number;

        /**
         * Creates a new DoNotUseThisDefine instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoNotUseThisDefine instance
         */
        public static create(properties?: gameconf.IDoNotUseThisDefine): gameconf.DoNotUseThisDefine;

        /**
         * Encodes the specified DoNotUseThisDefine message. Does not implicitly {@link gameconf.DoNotUseThisDefine.verify|verify} messages.
         * @param message DoNotUseThisDefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameconf.IDoNotUseThisDefine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DoNotUseThisDefine message, length delimited. Does not implicitly {@link gameconf.DoNotUseThisDefine.verify|verify} messages.
         * @param message DoNotUseThisDefine message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameconf.IDoNotUseThisDefine, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DoNotUseThisDefine message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoNotUseThisDefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameconf.DoNotUseThisDefine;

        /**
         * Decodes a DoNotUseThisDefine message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoNotUseThisDefine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameconf.DoNotUseThisDefine;

        /**
         * Verifies a DoNotUseThisDefine message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DoNotUseThisDefine message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DoNotUseThisDefine
         */
        public static fromObject(object: { [k: string]: any }): gameconf.DoNotUseThisDefine;

        /**
         * Creates a plain object from a DoNotUseThisDefine message. Also converts values to other types if specified.
         * @param message DoNotUseThisDefine
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameconf.DoNotUseThisDefine, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DoNotUseThisDefine to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gamedef. */
export namespace gamedef {

    /** Properties of a LoginInfo. */
    interface ILoginInfo {

        /** LoginInfo ip */
        ip?: (string|null);

        /** LoginInfo region */
        region?: (string|null);
    }

    /** Represents a LoginInfo. */
    class LoginInfo implements ILoginInfo {

        /**
         * Constructs a new LoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.ILoginInfo);

        /** LoginInfo ip. */
        public ip: string;

        /** LoginInfo region. */
        public region: string;

        /**
         * Creates a new LoginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginInfo instance
         */
        public static create(properties?: gamedef.ILoginInfo): gamedef.LoginInfo;

        /**
         * Encodes the specified LoginInfo message. Does not implicitly {@link gamedef.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginInfo message, length delimited. Does not implicitly {@link gamedef.LoginInfo.verify|verify} messages.
         * @param message LoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.ILoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.LoginInfo;

        /**
         * Decodes a LoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.LoginInfo;

        /**
         * Verifies a LoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginInfo
         */
        public static fromObject(object: { [k: string]: any }): gamedef.LoginInfo;

        /**
         * Creates a plain object from a LoginInfo message. Also converts values to other types if specified.
         * @param message LoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.LoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account Account */
        Account?: (string|null);

        /** Account userID */
        userID?: (number|Long|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IAccount);

        /** Account Account. */
        public Account: string;

        /** Account userID. */
        public userID: (number|Long);

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: gamedef.IAccount): gamedef.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link gamedef.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link gamedef.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): gamedef.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExtraAccountInfo. */
    interface IExtraAccountInfo {

        /** ExtraAccountInfo accountType */
        accountType?: (number|null);

        /** ExtraAccountInfo channel */
        channel?: (number|null);

        /** ExtraAccountInfo platform */
        platform?: (number|null);

        /** ExtraAccountInfo ip */
        ip?: (string|null);

        /** ExtraAccountInfo account */
        account?: (string|null);
    }

    /** Represents an ExtraAccountInfo. */
    class ExtraAccountInfo implements IExtraAccountInfo {

        /**
         * Constructs a new ExtraAccountInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IExtraAccountInfo);

        /** ExtraAccountInfo accountType. */
        public accountType: number;

        /** ExtraAccountInfo channel. */
        public channel: number;

        /** ExtraAccountInfo platform. */
        public platform: number;

        /** ExtraAccountInfo ip. */
        public ip: string;

        /** ExtraAccountInfo account. */
        public account: string;

        /**
         * Creates a new ExtraAccountInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtraAccountInfo instance
         */
        public static create(properties?: gamedef.IExtraAccountInfo): gamedef.ExtraAccountInfo;

        /**
         * Encodes the specified ExtraAccountInfo message. Does not implicitly {@link gamedef.ExtraAccountInfo.verify|verify} messages.
         * @param message ExtraAccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IExtraAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExtraAccountInfo message, length delimited. Does not implicitly {@link gamedef.ExtraAccountInfo.verify|verify} messages.
         * @param message ExtraAccountInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IExtraAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExtraAccountInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtraAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.ExtraAccountInfo;

        /**
         * Decodes an ExtraAccountInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtraAccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.ExtraAccountInfo;

        /**
         * Verifies an ExtraAccountInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExtraAccountInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtraAccountInfo
         */
        public static fromObject(object: { [k: string]: any }): gamedef.ExtraAccountInfo;

        /**
         * Creates a plain object from an ExtraAccountInfo message. Also converts values to other types if specified.
         * @param message ExtraAccountInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.ExtraAccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExtraAccountInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User userID */
        userID?: (number|Long|null);

        /** User nickname */
        nickname?: (string|null);

        /** User sexID */
        sexID?: (number|null);

        /** User fightGeneralID */
        fightGeneralID?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IUser);

        /** User userID. */
        public userID: (number|Long);

        /** User nickname. */
        public nickname: string;

        /** User sexID. */
        public sexID: number;

        /** User fightGeneralID. */
        public fightGeneralID: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: gamedef.IUser): gamedef.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link gamedef.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link gamedef.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): gamedef.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Individual. */
    interface IIndividual {

        /** Individual hp */
        hp?: (number|null);

        /** Individual attack */
        attack?: (number|null);

        /** Individual defense */
        defense?: (number|null);

        /** Individual spAttack */
        spAttack?: (number|null);

        /** Individual spDefense */
        spDefense?: (number|null);

        /** Individual speed */
        speed?: (number|null);
    }

    /** Represents an Individual. */
    class Individual implements IIndividual {

        /**
         * Constructs a new Individual.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IIndividual);

        /** Individual hp. */
        public hp: number;

        /** Individual attack. */
        public attack: number;

        /** Individual defense. */
        public defense: number;

        /** Individual spAttack. */
        public spAttack: number;

        /** Individual spDefense. */
        public spDefense: number;

        /** Individual speed. */
        public speed: number;

        /**
         * Creates a new Individual instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Individual instance
         */
        public static create(properties?: gamedef.IIndividual): gamedef.Individual;

        /**
         * Encodes the specified Individual message. Does not implicitly {@link gamedef.Individual.verify|verify} messages.
         * @param message Individual message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IIndividual, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Individual message, length delimited. Does not implicitly {@link gamedef.Individual.verify|verify} messages.
         * @param message Individual message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IIndividual, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Individual message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Individual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.Individual;

        /**
         * Decodes an Individual message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Individual
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.Individual;

        /**
         * Verifies an Individual message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Individual message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Individual
         */
        public static fromObject(object: { [k: string]: any }): gamedef.Individual;

        /**
         * Creates a plain object from an Individual message. Also converts values to other types if specified.
         * @param message Individual
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.Individual, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Individual to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a General. */
    interface IGeneral {

        /** General pkID */
        pkID?: (number|Long|null);

        /** General generalID */
        generalID?: (number|null);

        /** General individual */
        individual?: (gamedef.IIndividual|null);

        /** General effort */
        effort?: (gamedef.IIndividual|null);

        /** General skills */
        skills?: (number[]|null);

        /** General level */
        level?: (number|null);

        /** General exp */
        exp?: (number|null);
    }

    /** Represents a General. */
    class General implements IGeneral {

        /**
         * Constructs a new General.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IGeneral);

        /** General pkID. */
        public pkID: (number|Long);

        /** General generalID. */
        public generalID: number;

        /** General individual. */
        public individual?: (gamedef.IIndividual|null);

        /** General effort. */
        public effort?: (gamedef.IIndividual|null);

        /** General skills. */
        public skills: number[];

        /** General level. */
        public level: number;

        /** General exp. */
        public exp: number;

        /**
         * Creates a new General instance using the specified properties.
         * @param [properties] Properties to set
         * @returns General instance
         */
        public static create(properties?: gamedef.IGeneral): gamedef.General;

        /**
         * Encodes the specified General message. Does not implicitly {@link gamedef.General.verify|verify} messages.
         * @param message General message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IGeneral, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified General message, length delimited. Does not implicitly {@link gamedef.General.verify|verify} messages.
         * @param message General message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IGeneral, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a General message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns General
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.General;

        /**
         * Decodes a General message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns General
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.General;

        /**
         * Verifies a General message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a General message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns General
         */
        public static fromObject(object: { [k: string]: any }): gamedef.General;

        /**
         * Creates a plain object from a General message. Also converts values to other types if specified.
         * @param message General
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.General, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this General to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item pkID */
        pkID?: (number|Long|null);

        /** Item itemID */
        itemID?: (number|null);

        /** Item num */
        num?: (number|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IItem);

        /** Item pkID. */
        public pkID: (number|Long);

        /** Item itemID. */
        public itemID: number;

        /** Item num. */
        public num: number;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: gamedef.IItem): gamedef.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link gamedef.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link gamedef.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): gamedef.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserData. */
    interface IUserData {

        /** UserData user */
        user?: (gamedef.IUser|null);

        /** UserData generals */
        generals?: (gamedef.IGeneral[]|null);

        /** UserData items */
        items?: (gamedef.IItem[]|null);
    }

    /** Represents a UserData. */
    class UserData implements IUserData {

        /**
         * Constructs a new UserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IUserData);

        /** UserData user. */
        public user?: (gamedef.IUser|null);

        /** UserData generals. */
        public generals: gamedef.IGeneral[];

        /** UserData items. */
        public items: gamedef.IItem[];

        /**
         * Creates a new UserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserData instance
         */
        public static create(properties?: gamedef.IUserData): gamedef.UserData;

        /**
         * Encodes the specified UserData message. Does not implicitly {@link gamedef.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserData message, length delimited. Does not implicitly {@link gamedef.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.UserData;

        /**
         * Decodes a UserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.UserData;

        /**
         * Verifies a UserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserData
         */
        public static fromObject(object: { [k: string]: any }): gamedef.UserData;

        /**
         * Creates a plain object from a UserData message. Also converts values to other types if specified.
         * @param message UserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Buff. */
    interface IBuff {

        /** Buff buffType */
        buffType?: (gameconf.SkillEffectTyp|null);

        /** Buff last */
        last?: (number|null);

        /** Buff level */
        level?: (number|null);
    }

    /** Represents a Buff. */
    class Buff implements IBuff {

        /**
         * Constructs a new Buff.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IBuff);

        /** Buff buffType. */
        public buffType: gameconf.SkillEffectTyp;

        /** Buff last. */
        public last: number;

        /** Buff level. */
        public level: number;

        /**
         * Creates a new Buff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Buff instance
         */
        public static create(properties?: gamedef.IBuff): gamedef.Buff;

        /**
         * Encodes the specified Buff message. Does not implicitly {@link gamedef.Buff.verify|verify} messages.
         * @param message Buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IBuff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Buff message, length delimited. Does not implicitly {@link gamedef.Buff.verify|verify} messages.
         * @param message Buff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IBuff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Buff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.Buff;

        /**
         * Decodes a Buff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Buff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.Buff;

        /**
         * Verifies a Buff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Buff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Buff
         */
        public static fromObject(object: { [k: string]: any }): gamedef.Buff;

        /**
         * Creates a plain object from a Buff message. Also converts values to other types if specified.
         * @param message Buff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.Buff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Buff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameGeneral. */
    interface IGameGeneral {

        /** GameGeneral generalID */
        generalID?: (number|null);

        /** GameGeneral level */
        level?: (number|null);

        /** GameGeneral baseHp */
        baseHp?: (number|null);

        /** GameGeneral baseAttack */
        baseAttack?: (number|null);

        /** GameGeneral baseDefense */
        baseDefense?: (number|null);

        /** GameGeneral baseSpAttack */
        baseSpAttack?: (number|null);

        /** GameGeneral baseSpDefense */
        baseSpDefense?: (number|null);

        /** GameGeneral baseSpeed */
        baseSpeed?: (number|null);

        /** GameGeneral curHP */
        curHP?: (number|null);

        /** GameGeneral buffs */
        buffs?: (gamedef.IBuff[]|null);

        /** GameGeneral skills */
        skills?: (number[]|null);

        /** GameGeneral userID */
        userID?: (number|Long|null);

        /** GameGeneral pkID */
        pkID?: (number|Long|null);
    }

    /** Represents a GameGeneral. */
    class GameGeneral implements IGameGeneral {

        /**
         * Constructs a new GameGeneral.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IGameGeneral);

        /** GameGeneral generalID. */
        public generalID: number;

        /** GameGeneral level. */
        public level: number;

        /** GameGeneral baseHp. */
        public baseHp: number;

        /** GameGeneral baseAttack. */
        public baseAttack: number;

        /** GameGeneral baseDefense. */
        public baseDefense: number;

        /** GameGeneral baseSpAttack. */
        public baseSpAttack: number;

        /** GameGeneral baseSpDefense. */
        public baseSpDefense: number;

        /** GameGeneral baseSpeed. */
        public baseSpeed: number;

        /** GameGeneral curHP. */
        public curHP: number;

        /** GameGeneral buffs. */
        public buffs: gamedef.IBuff[];

        /** GameGeneral skills. */
        public skills: number[];

        /** GameGeneral userID. */
        public userID: (number|Long);

        /** GameGeneral pkID. */
        public pkID: (number|Long);

        /**
         * Creates a new GameGeneral instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameGeneral instance
         */
        public static create(properties?: gamedef.IGameGeneral): gamedef.GameGeneral;

        /**
         * Encodes the specified GameGeneral message. Does not implicitly {@link gamedef.GameGeneral.verify|verify} messages.
         * @param message GameGeneral message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IGameGeneral, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameGeneral message, length delimited. Does not implicitly {@link gamedef.GameGeneral.verify|verify} messages.
         * @param message GameGeneral message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IGameGeneral, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameGeneral message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameGeneral
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.GameGeneral;

        /**
         * Decodes a GameGeneral message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameGeneral
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.GameGeneral;

        /**
         * Verifies a GameGeneral message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameGeneral message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameGeneral
         */
        public static fromObject(object: { [k: string]: any }): gamedef.GameGeneral;

        /**
         * Creates a plain object from a GameGeneral message. Also converts values to other types if specified.
         * @param message GameGeneral
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.GameGeneral, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameGeneral to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GameStageTyp enum. */
    enum GameStageTyp {
        GSTInvalid = 0,
        GSTChoose = 1,
        GSTAction = 2
    }

    /** ChessTyp enum. */
    enum ChessTyp {
        CTInvalid = 0,
        CTBlank = 1,
        CTMine = 2
    }

    /** Properties of a Chess. */
    interface IChess {

        /** Chess chessType */
        chessType?: (gamedef.ChessTyp|null);

        /** Chess visible */
        visible?: (boolean|null);

        /** Chess mineNum */
        mineNum?: (number|null);
    }

    /** Represents a Chess. */
    class Chess implements IChess {

        /**
         * Constructs a new Chess.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamedef.IChess);

        /** Chess chessType. */
        public chessType: gamedef.ChessTyp;

        /** Chess visible. */
        public visible: boolean;

        /** Chess mineNum. */
        public mineNum: number;

        /**
         * Creates a new Chess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chess instance
         */
        public static create(properties?: gamedef.IChess): gamedef.Chess;

        /**
         * Encodes the specified Chess message. Does not implicitly {@link gamedef.Chess.verify|verify} messages.
         * @param message Chess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamedef.IChess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chess message, length delimited. Does not implicitly {@link gamedef.Chess.verify|verify} messages.
         * @param message Chess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamedef.IChess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamedef.Chess;

        /**
         * Decodes a Chess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamedef.Chess;

        /**
         * Verifies a Chess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chess
         */
        public static fromObject(object: { [k: string]: any }): gamedef.Chess;

        /**
         * Creates a plain object from a Chess message. Also converts values to other types if specified.
         * @param message Chess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamedef.Chess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace cmsg. */
export namespace cmsg {

    /** Properties of a CReqSyncSystemTime. */
    interface ICReqSyncSystemTime {

        /** CReqSyncSystemTime timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a CReqSyncSystemTime. */
    class CReqSyncSystemTime implements ICReqSyncSystemTime {

        /**
         * Constructs a new CReqSyncSystemTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqSyncSystemTime);

        /** CReqSyncSystemTime timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new CReqSyncSystemTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqSyncSystemTime instance
         */
        public static create(properties?: cmsg.ICReqSyncSystemTime): cmsg.CReqSyncSystemTime;

        /**
         * Encodes the specified CReqSyncSystemTime message. Does not implicitly {@link cmsg.CReqSyncSystemTime.verify|verify} messages.
         * @param message CReqSyncSystemTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqSyncSystemTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqSyncSystemTime message, length delimited. Does not implicitly {@link cmsg.CReqSyncSystemTime.verify|verify} messages.
         * @param message CReqSyncSystemTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqSyncSystemTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqSyncSystemTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqSyncSystemTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqSyncSystemTime;

        /**
         * Decodes a CReqSyncSystemTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqSyncSystemTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqSyncSystemTime;

        /**
         * Verifies a CReqSyncSystemTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqSyncSystemTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqSyncSystemTime
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqSyncSystemTime;

        /**
         * Creates a plain object from a CReqSyncSystemTime message. Also converts values to other types if specified.
         * @param message CReqSyncSystemTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqSyncSystemTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqSyncSystemTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespSyncSystemTime. */
    interface ICRespSyncSystemTime {

        /** CRespSyncSystemTime timestamp */
        timestamp?: (number|Long|null);

        /** CRespSyncSystemTime serverTimestamp */
        serverTimestamp?: (number|Long|null);
    }

    /** Represents a CRespSyncSystemTime. */
    class CRespSyncSystemTime implements ICRespSyncSystemTime {

        /**
         * Constructs a new CRespSyncSystemTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespSyncSystemTime);

        /** CRespSyncSystemTime timestamp. */
        public timestamp: (number|Long);

        /** CRespSyncSystemTime serverTimestamp. */
        public serverTimestamp: (number|Long);

        /**
         * Creates a new CRespSyncSystemTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespSyncSystemTime instance
         */
        public static create(properties?: cmsg.ICRespSyncSystemTime): cmsg.CRespSyncSystemTime;

        /**
         * Encodes the specified CRespSyncSystemTime message. Does not implicitly {@link cmsg.CRespSyncSystemTime.verify|verify} messages.
         * @param message CRespSyncSystemTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespSyncSystemTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespSyncSystemTime message, length delimited. Does not implicitly {@link cmsg.CRespSyncSystemTime.verify|verify} messages.
         * @param message CRespSyncSystemTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespSyncSystemTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespSyncSystemTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespSyncSystemTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespSyncSystemTime;

        /**
         * Decodes a CRespSyncSystemTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespSyncSystemTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespSyncSystemTime;

        /**
         * Verifies a CRespSyncSystemTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespSyncSystemTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespSyncSystemTime
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespSyncSystemTime;

        /**
         * Creates a plain object from a CRespSyncSystemTime message. Also converts values to other types if specified.
         * @param message CRespSyncSystemTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespSyncSystemTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespSyncSystemTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqAuth. */
    interface ICReqAuth {

        /** CReqAuth account */
        account?: (string|null);

        /** CReqAuth password */
        password?: (string|null);

        /** CReqAuth extra */
        extra?: (gamedef.IExtraAccountInfo|null);
    }

    /** Represents a CReqAuth. */
    class CReqAuth implements ICReqAuth {

        /**
         * Constructs a new CReqAuth.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqAuth);

        /** CReqAuth account. */
        public account: string;

        /** CReqAuth password. */
        public password: string;

        /** CReqAuth extra. */
        public extra?: (gamedef.IExtraAccountInfo|null);

        /**
         * Creates a new CReqAuth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqAuth instance
         */
        public static create(properties?: cmsg.ICReqAuth): cmsg.CReqAuth;

        /**
         * Encodes the specified CReqAuth message. Does not implicitly {@link cmsg.CReqAuth.verify|verify} messages.
         * @param message CReqAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqAuth message, length delimited. Does not implicitly {@link cmsg.CReqAuth.verify|verify} messages.
         * @param message CReqAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqAuth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqAuth;

        /**
         * Decodes a CReqAuth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqAuth;

        /**
         * Verifies a CReqAuth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqAuth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqAuth
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqAuth;

        /**
         * Creates a plain object from a CReqAuth message. Also converts values to other types if specified.
         * @param message CReqAuth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqAuth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespAuth. */
    interface ICRespAuth {

        /** CRespAuth errCode */
        errCode?: (number|null);

        /** CRespAuth errMsg */
        errMsg?: (string|null);

        /** CRespAuth account */
        account?: (string|null);

        /** CRespAuth userID */
        userID?: (number|Long|null);

        /** CRespAuth sign */
        sign?: (string|null);

        /** CRespAuth unlockTime */
        unlockTime?: (number|Long|null);
    }

    /** Represents a CRespAuth. */
    class CRespAuth implements ICRespAuth {

        /**
         * Constructs a new CRespAuth.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespAuth);

        /** CRespAuth errCode. */
        public errCode: number;

        /** CRespAuth errMsg. */
        public errMsg: string;

        /** CRespAuth account. */
        public account: string;

        /** CRespAuth userID. */
        public userID: (number|Long);

        /** CRespAuth sign. */
        public sign: string;

        /** CRespAuth unlockTime. */
        public unlockTime: (number|Long);

        /**
         * Creates a new CRespAuth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespAuth instance
         */
        public static create(properties?: cmsg.ICRespAuth): cmsg.CRespAuth;

        /**
         * Encodes the specified CRespAuth message. Does not implicitly {@link cmsg.CRespAuth.verify|verify} messages.
         * @param message CRespAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespAuth message, length delimited. Does not implicitly {@link cmsg.CRespAuth.verify|verify} messages.
         * @param message CRespAuth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespAuth, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespAuth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespAuth;

        /**
         * Decodes a CRespAuth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespAuth;

        /**
         * Verifies a CRespAuth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespAuth message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespAuth
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespAuth;

        /**
         * Creates a plain object from a CRespAuth message. Also converts values to other types if specified.
         * @param message CRespAuth
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespAuth, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespAuth to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyLoginInfo. */
    interface ICNotifyLoginInfo {

        /** CNotifyLoginInfo account */
        account?: (string|null);

        /** CNotifyLoginInfo ip */
        ip?: (string|null);
    }

    /** Represents a CNotifyLoginInfo. */
    class CNotifyLoginInfo implements ICNotifyLoginInfo {

        /**
         * Constructs a new CNotifyLoginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyLoginInfo);

        /** CNotifyLoginInfo account. */
        public account: string;

        /** CNotifyLoginInfo ip. */
        public ip: string;

        /**
         * Creates a new CNotifyLoginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyLoginInfo instance
         */
        public static create(properties?: cmsg.ICNotifyLoginInfo): cmsg.CNotifyLoginInfo;

        /**
         * Encodes the specified CNotifyLoginInfo message. Does not implicitly {@link cmsg.CNotifyLoginInfo.verify|verify} messages.
         * @param message CNotifyLoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyLoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyLoginInfo message, length delimited. Does not implicitly {@link cmsg.CNotifyLoginInfo.verify|verify} messages.
         * @param message CNotifyLoginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyLoginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyLoginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyLoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyLoginInfo;

        /**
         * Decodes a CNotifyLoginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyLoginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyLoginInfo;

        /**
         * Verifies a CNotifyLoginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyLoginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyLoginInfo
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyLoginInfo;

        /**
         * Creates a plain object from a CNotifyLoginInfo message. Also converts values to other types if specified.
         * @param message CNotifyLoginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyLoginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyLoginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqLogin. */
    interface ICReqLogin {

        /** CReqLogin userID */
        userID?: (number|Long|null);

        /** CReqLogin sign */
        sign?: (string|null);
    }

    /** Represents a CReqLogin. */
    class CReqLogin implements ICReqLogin {

        /**
         * Constructs a new CReqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqLogin);

        /** CReqLogin userID. */
        public userID: (number|Long);

        /** CReqLogin sign. */
        public sign: string;

        /**
         * Creates a new CReqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqLogin instance
         */
        public static create(properties?: cmsg.ICReqLogin): cmsg.CReqLogin;

        /**
         * Encodes the specified CReqLogin message. Does not implicitly {@link cmsg.CReqLogin.verify|verify} messages.
         * @param message CReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqLogin message, length delimited. Does not implicitly {@link cmsg.CReqLogin.verify|verify} messages.
         * @param message CReqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqLogin;

        /**
         * Decodes a CReqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqLogin;

        /**
         * Verifies a CReqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqLogin
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqLogin;

        /**
         * Creates a plain object from a CReqLogin message. Also converts values to other types if specified.
         * @param message CReqLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespLogin. */
    interface ICRespLogin {

        /** CRespLogin errCode */
        errCode?: (number|null);

        /** CRespLogin errMsg */
        errMsg?: (string|null);

        /** CRespLogin userID */
        userID?: (number|Long|null);

        /** CRespLogin user */
        user?: (gamedef.IUser|null);

        /** CRespLogin isReconnect */
        isReconnect?: (boolean|null);
    }

    /** Represents a CRespLogin. */
    class CRespLogin implements ICRespLogin {

        /**
         * Constructs a new CRespLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespLogin);

        /** CRespLogin errCode. */
        public errCode: number;

        /** CRespLogin errMsg. */
        public errMsg: string;

        /** CRespLogin userID. */
        public userID: (number|Long);

        /** CRespLogin user. */
        public user?: (gamedef.IUser|null);

        /** CRespLogin isReconnect. */
        public isReconnect: boolean;

        /**
         * Creates a new CRespLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespLogin instance
         */
        public static create(properties?: cmsg.ICRespLogin): cmsg.CRespLogin;

        /**
         * Encodes the specified CRespLogin message. Does not implicitly {@link cmsg.CRespLogin.verify|verify} messages.
         * @param message CRespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespLogin message, length delimited. Does not implicitly {@link cmsg.CRespLogin.verify|verify} messages.
         * @param message CRespLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespLogin;

        /**
         * Decodes a CRespLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespLogin;

        /**
         * Verifies a CRespLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespLogin
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespLogin;

        /**
         * Creates a plain object from a CRespLogin message. Also converts values to other types if specified.
         * @param message CRespLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqLogout. */
    interface ICReqLogout {
    }

    /** Represents a CReqLogout. */
    class CReqLogout implements ICReqLogout {

        /**
         * Constructs a new CReqLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqLogout);

        /**
         * Creates a new CReqLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqLogout instance
         */
        public static create(properties?: cmsg.ICReqLogout): cmsg.CReqLogout;

        /**
         * Encodes the specified CReqLogout message. Does not implicitly {@link cmsg.CReqLogout.verify|verify} messages.
         * @param message CReqLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqLogout message, length delimited. Does not implicitly {@link cmsg.CReqLogout.verify|verify} messages.
         * @param message CReqLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqLogout;

        /**
         * Decodes a CReqLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqLogout;

        /**
         * Verifies a CReqLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqLogout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqLogout
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqLogout;

        /**
         * Creates a plain object from a CReqLogout message. Also converts values to other types if specified.
         * @param message CReqLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqLogout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespLogout. */
    interface ICRespLogout {

        /** CRespLogout errCode */
        errCode?: (number|null);

        /** CRespLogout errMsg */
        errMsg?: (string|null);
    }

    /** Represents a CRespLogout. */
    class CRespLogout implements ICRespLogout {

        /**
         * Constructs a new CRespLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespLogout);

        /** CRespLogout errCode. */
        public errCode: number;

        /** CRespLogout errMsg. */
        public errMsg: string;

        /**
         * Creates a new CRespLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespLogout instance
         */
        public static create(properties?: cmsg.ICRespLogout): cmsg.CRespLogout;

        /**
         * Encodes the specified CRespLogout message. Does not implicitly {@link cmsg.CRespLogout.verify|verify} messages.
         * @param message CRespLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespLogout message, length delimited. Does not implicitly {@link cmsg.CRespLogout.verify|verify} messages.
         * @param message CRespLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespLogout;

        /**
         * Decodes a CRespLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespLogout;

        /**
         * Verifies a CRespLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespLogout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespLogout
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespLogout;

        /**
         * Creates a plain object from a CRespLogout message. Also converts values to other types if specified.
         * @param message CRespLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespLogout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyLogout. */
    interface ICNotifyLogout {

        /** CNotifyLogout loginInfo */
        loginInfo?: (gamedef.ILoginInfo|null);
    }

    /** Represents a CNotifyLogout. */
    class CNotifyLogout implements ICNotifyLogout {

        /**
         * Constructs a new CNotifyLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyLogout);

        /** CNotifyLogout loginInfo. */
        public loginInfo?: (gamedef.ILoginInfo|null);

        /**
         * Creates a new CNotifyLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyLogout instance
         */
        public static create(properties?: cmsg.ICNotifyLogout): cmsg.CNotifyLogout;

        /**
         * Encodes the specified CNotifyLogout message. Does not implicitly {@link cmsg.CNotifyLogout.verify|verify} messages.
         * @param message CNotifyLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyLogout message, length delimited. Does not implicitly {@link cmsg.CNotifyLogout.verify|verify} messages.
         * @param message CNotifyLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyLogout;

        /**
         * Decodes a CNotifyLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyLogout;

        /**
         * Verifies a CNotifyLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyLogout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyLogout
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyLogout;

        /**
         * Creates a plain object from a CNotifyLogout message. Also converts values to other types if specified.
         * @param message CNotifyLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyLogout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqNotifyUserData. */
    interface ICReqNotifyUserData {
    }

    /** Represents a CReqNotifyUserData. */
    class CReqNotifyUserData implements ICReqNotifyUserData {

        /**
         * Constructs a new CReqNotifyUserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqNotifyUserData);

        /**
         * Creates a new CReqNotifyUserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqNotifyUserData instance
         */
        public static create(properties?: cmsg.ICReqNotifyUserData): cmsg.CReqNotifyUserData;

        /**
         * Encodes the specified CReqNotifyUserData message. Does not implicitly {@link cmsg.CReqNotifyUserData.verify|verify} messages.
         * @param message CReqNotifyUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqNotifyUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqNotifyUserData message, length delimited. Does not implicitly {@link cmsg.CReqNotifyUserData.verify|verify} messages.
         * @param message CReqNotifyUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqNotifyUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqNotifyUserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqNotifyUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqNotifyUserData;

        /**
         * Decodes a CReqNotifyUserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqNotifyUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqNotifyUserData;

        /**
         * Verifies a CReqNotifyUserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqNotifyUserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqNotifyUserData
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqNotifyUserData;

        /**
         * Creates a plain object from a CReqNotifyUserData message. Also converts values to other types if specified.
         * @param message CReqNotifyUserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqNotifyUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqNotifyUserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespNotifyUserData. */
    interface ICRespNotifyUserData {

        /** CRespNotifyUserData errCode */
        errCode?: (number|null);

        /** CRespNotifyUserData errMsg */
        errMsg?: (string|null);

        /** CRespNotifyUserData generals */
        generals?: (gamedef.IGeneral[]|null);

        /** CRespNotifyUserData Items */
        Items?: (gamedef.IItem[]|null);
    }

    /** Represents a CRespNotifyUserData. */
    class CRespNotifyUserData implements ICRespNotifyUserData {

        /**
         * Constructs a new CRespNotifyUserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespNotifyUserData);

        /** CRespNotifyUserData errCode. */
        public errCode: number;

        /** CRespNotifyUserData errMsg. */
        public errMsg: string;

        /** CRespNotifyUserData generals. */
        public generals: gamedef.IGeneral[];

        /** CRespNotifyUserData Items. */
        public Items: gamedef.IItem[];

        /**
         * Creates a new CRespNotifyUserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespNotifyUserData instance
         */
        public static create(properties?: cmsg.ICRespNotifyUserData): cmsg.CRespNotifyUserData;

        /**
         * Encodes the specified CRespNotifyUserData message. Does not implicitly {@link cmsg.CRespNotifyUserData.verify|verify} messages.
         * @param message CRespNotifyUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespNotifyUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespNotifyUserData message, length delimited. Does not implicitly {@link cmsg.CRespNotifyUserData.verify|verify} messages.
         * @param message CRespNotifyUserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespNotifyUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespNotifyUserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespNotifyUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespNotifyUserData;

        /**
         * Decodes a CRespNotifyUserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespNotifyUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespNotifyUserData;

        /**
         * Verifies a CRespNotifyUserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespNotifyUserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespNotifyUserData
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespNotifyUserData;

        /**
         * Creates a plain object from a CRespNotifyUserData message. Also converts values to other types if specified.
         * @param message CRespNotifyUserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespNotifyUserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespNotifyUserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyDataChange. */
    interface ICNotifyDataChange {

        /** CNotifyDataChange changes */
        changes?: (cmsg.CNotifyDataChange.type[]|null);

        /** CNotifyDataChange user */
        user?: (gamedef.IUser|null);

        /** CNotifyDataChange generals */
        generals?: (gamedef.IGeneral[]|null);
    }

    /** Represents a CNotifyDataChange. */
    class CNotifyDataChange implements ICNotifyDataChange {

        /**
         * Constructs a new CNotifyDataChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyDataChange);

        /** CNotifyDataChange changes. */
        public changes: cmsg.CNotifyDataChange.type[];

        /** CNotifyDataChange user. */
        public user?: (gamedef.IUser|null);

        /** CNotifyDataChange generals. */
        public generals: gamedef.IGeneral[];

        /**
         * Creates a new CNotifyDataChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyDataChange instance
         */
        public static create(properties?: cmsg.ICNotifyDataChange): cmsg.CNotifyDataChange;

        /**
         * Encodes the specified CNotifyDataChange message. Does not implicitly {@link cmsg.CNotifyDataChange.verify|verify} messages.
         * @param message CNotifyDataChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyDataChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyDataChange message, length delimited. Does not implicitly {@link cmsg.CNotifyDataChange.verify|verify} messages.
         * @param message CNotifyDataChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyDataChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyDataChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyDataChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyDataChange;

        /**
         * Decodes a CNotifyDataChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyDataChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyDataChange;

        /**
         * Verifies a CNotifyDataChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyDataChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyDataChange
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyDataChange;

        /**
         * Creates a plain object from a CNotifyDataChange message. Also converts values to other types if specified.
         * @param message CNotifyDataChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyDataChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyDataChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CNotifyDataChange {

        /** type enum. */
        enum type {
            DCTInvalid = 0,
            DCTUser = 1,
            DCTGeneral = 2
        }
    }

    /** Properties of a CReqUseSkill. */
    interface ICReqUseSkill {

        /** CReqUseSkill skillID */
        skillID?: (number|null);
    }

    /** Represents a CReqUseSkill. */
    class CReqUseSkill implements ICReqUseSkill {

        /**
         * Constructs a new CReqUseSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqUseSkill);

        /** CReqUseSkill skillID. */
        public skillID: number;

        /**
         * Creates a new CReqUseSkill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqUseSkill instance
         */
        public static create(properties?: cmsg.ICReqUseSkill): cmsg.CReqUseSkill;

        /**
         * Encodes the specified CReqUseSkill message. Does not implicitly {@link cmsg.CReqUseSkill.verify|verify} messages.
         * @param message CReqUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqUseSkill message, length delimited. Does not implicitly {@link cmsg.CReqUseSkill.verify|verify} messages.
         * @param message CReqUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqUseSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqUseSkill;

        /**
         * Decodes a CReqUseSkill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqUseSkill;

        /**
         * Verifies a CReqUseSkill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqUseSkill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqUseSkill
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqUseSkill;

        /**
         * Creates a plain object from a CReqUseSkill message. Also converts values to other types if specified.
         * @param message CReqUseSkill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqUseSkill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqUseSkill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespUseSkill. */
    interface ICRespUseSkill {

        /** CRespUseSkill errCode */
        errCode?: (number|null);

        /** CRespUseSkill errMsg */
        errMsg?: (string|null);

        /** CRespUseSkill skillID */
        skillID?: (number|null);
    }

    /** Represents a CRespUseSkill. */
    class CRespUseSkill implements ICRespUseSkill {

        /**
         * Constructs a new CRespUseSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespUseSkill);

        /** CRespUseSkill errCode. */
        public errCode: number;

        /** CRespUseSkill errMsg. */
        public errMsg: string;

        /** CRespUseSkill skillID. */
        public skillID: number;

        /**
         * Creates a new CRespUseSkill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespUseSkill instance
         */
        public static create(properties?: cmsg.ICRespUseSkill): cmsg.CRespUseSkill;

        /**
         * Encodes the specified CRespUseSkill message. Does not implicitly {@link cmsg.CRespUseSkill.verify|verify} messages.
         * @param message CRespUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespUseSkill message, length delimited. Does not implicitly {@link cmsg.CRespUseSkill.verify|verify} messages.
         * @param message CRespUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespUseSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespUseSkill;

        /**
         * Decodes a CRespUseSkill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespUseSkill;

        /**
         * Verifies a CRespUseSkill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespUseSkill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespUseSkill
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespUseSkill;

        /**
         * Creates a plain object from a CRespUseSkill message. Also converts values to other types if specified.
         * @param message CRespUseSkill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespUseSkill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespUseSkill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyUseSkill. */
    interface ICNotifyUseSkill {

        /** CNotifyUseSkill userID */
        userID?: (number|Long|null);

        /** CNotifyUseSkill skillID */
        skillID?: (number|null);
    }

    /** Represents a CNotifyUseSkill. */
    class CNotifyUseSkill implements ICNotifyUseSkill {

        /**
         * Constructs a new CNotifyUseSkill.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyUseSkill);

        /** CNotifyUseSkill userID. */
        public userID: (number|Long);

        /** CNotifyUseSkill skillID. */
        public skillID: number;

        /**
         * Creates a new CNotifyUseSkill instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyUseSkill instance
         */
        public static create(properties?: cmsg.ICNotifyUseSkill): cmsg.CNotifyUseSkill;

        /**
         * Encodes the specified CNotifyUseSkill message. Does not implicitly {@link cmsg.CNotifyUseSkill.verify|verify} messages.
         * @param message CNotifyUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyUseSkill message, length delimited. Does not implicitly {@link cmsg.CNotifyUseSkill.verify|verify} messages.
         * @param message CNotifyUseSkill message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyUseSkill, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyUseSkill message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyUseSkill;

        /**
         * Decodes a CNotifyUseSkill message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyUseSkill;

        /**
         * Verifies a CNotifyUseSkill message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyUseSkill message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyUseSkill
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyUseSkill;

        /**
         * Creates a plain object from a CNotifyUseSkill message. Also converts values to other types if specified.
         * @param message CNotifyUseSkill
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyUseSkill, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyUseSkill to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyGameStart. */
    interface ICNotifyGameStart {

        /** CNotifyGameStart generals */
        generals?: (gamedef.IGameGeneral[]|null);
    }

    /** Represents a CNotifyGameStart. */
    class CNotifyGameStart implements ICNotifyGameStart {

        /**
         * Constructs a new CNotifyGameStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyGameStart);

        /** CNotifyGameStart generals. */
        public generals: gamedef.IGameGeneral[];

        /**
         * Creates a new CNotifyGameStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyGameStart instance
         */
        public static create(properties?: cmsg.ICNotifyGameStart): cmsg.CNotifyGameStart;

        /**
         * Encodes the specified CNotifyGameStart message. Does not implicitly {@link cmsg.CNotifyGameStart.verify|verify} messages.
         * @param message CNotifyGameStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyGameStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyGameStart message, length delimited. Does not implicitly {@link cmsg.CNotifyGameStart.verify|verify} messages.
         * @param message CNotifyGameStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyGameStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyGameStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyGameStart;

        /**
         * Decodes a CNotifyGameStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyGameStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyGameStart;

        /**
         * Verifies a CNotifyGameStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyGameStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyGameStart
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyGameStart;

        /**
         * Creates a plain object from a CNotifyGameStart message. Also converts values to other types if specified.
         * @param message CNotifyGameStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyGameStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyGameStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyGeneralStatus. */
    interface ICNotifyGeneralStatus {

        /** CNotifyGeneralStatus gameGeneral */
        gameGeneral?: (gamedef.IGameGeneral|null);
    }

    /** Represents a CNotifyGeneralStatus. */
    class CNotifyGeneralStatus implements ICNotifyGeneralStatus {

        /**
         * Constructs a new CNotifyGeneralStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyGeneralStatus);

        /** CNotifyGeneralStatus gameGeneral. */
        public gameGeneral?: (gamedef.IGameGeneral|null);

        /**
         * Creates a new CNotifyGeneralStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyGeneralStatus instance
         */
        public static create(properties?: cmsg.ICNotifyGeneralStatus): cmsg.CNotifyGeneralStatus;

        /**
         * Encodes the specified CNotifyGeneralStatus message. Does not implicitly {@link cmsg.CNotifyGeneralStatus.verify|verify} messages.
         * @param message CNotifyGeneralStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyGeneralStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyGeneralStatus message, length delimited. Does not implicitly {@link cmsg.CNotifyGeneralStatus.verify|verify} messages.
         * @param message CNotifyGeneralStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyGeneralStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyGeneralStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyGeneralStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyGeneralStatus;

        /**
         * Decodes a CNotifyGeneralStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyGeneralStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyGeneralStatus;

        /**
         * Verifies a CNotifyGeneralStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyGeneralStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyGeneralStatus
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyGeneralStatus;

        /**
         * Creates a plain object from a CNotifyGeneralStatus message. Also converts values to other types if specified.
         * @param message CNotifyGeneralStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyGeneralStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyGeneralStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyGameStage. */
    interface ICNotifyGameStage {

        /** CNotifyGameStage stage */
        stage?: (gamedef.GameStageTyp|null);

        /** CNotifyGameStage lastTime */
        lastTime?: (number|null);
    }

    /** Represents a CNotifyGameStage. */
    class CNotifyGameStage implements ICNotifyGameStage {

        /**
         * Constructs a new CNotifyGameStage.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyGameStage);

        /** CNotifyGameStage stage. */
        public stage: gamedef.GameStageTyp;

        /** CNotifyGameStage lastTime. */
        public lastTime: number;

        /**
         * Creates a new CNotifyGameStage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyGameStage instance
         */
        public static create(properties?: cmsg.ICNotifyGameStage): cmsg.CNotifyGameStage;

        /**
         * Encodes the specified CNotifyGameStage message. Does not implicitly {@link cmsg.CNotifyGameStage.verify|verify} messages.
         * @param message CNotifyGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyGameStage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyGameStage message, length delimited. Does not implicitly {@link cmsg.CNotifyGameStage.verify|verify} messages.
         * @param message CNotifyGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyGameStage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyGameStage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyGameStage;

        /**
         * Decodes a CNotifyGameStage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyGameStage;

        /**
         * Verifies a CNotifyGameStage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyGameStage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyGameStage
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyGameStage;

        /**
         * Creates a plain object from a CNotifyGameStage message. Also converts values to other types if specified.
         * @param message CNotifyGameStage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyGameStage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyGameStage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CNotifyGameResult. */
    interface ICNotifyGameResult {

        /** CNotifyGameResult winner */
        winner?: (number|Long|null);

        /** CNotifyGameResult exp */
        exp?: (number|null);
    }

    /** Represents a CNotifyGameResult. */
    class CNotifyGameResult implements ICNotifyGameResult {

        /**
         * Constructs a new CNotifyGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICNotifyGameResult);

        /** CNotifyGameResult winner. */
        public winner: (number|Long);

        /** CNotifyGameResult exp. */
        public exp: number;

        /**
         * Creates a new CNotifyGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CNotifyGameResult instance
         */
        public static create(properties?: cmsg.ICNotifyGameResult): cmsg.CNotifyGameResult;

        /**
         * Encodes the specified CNotifyGameResult message. Does not implicitly {@link cmsg.CNotifyGameResult.verify|verify} messages.
         * @param message CNotifyGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICNotifyGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CNotifyGameResult message, length delimited. Does not implicitly {@link cmsg.CNotifyGameResult.verify|verify} messages.
         * @param message CNotifyGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICNotifyGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CNotifyGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CNotifyGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CNotifyGameResult;

        /**
         * Decodes a CNotifyGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CNotifyGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CNotifyGameResult;

        /**
         * Verifies a CNotifyGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CNotifyGameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CNotifyGameResult
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CNotifyGameResult;

        /**
         * Creates a plain object from a CNotifyGameResult message. Also converts values to other types if specified.
         * @param message CNotifyGameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CNotifyGameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CNotifyGameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqUserInit. */
    interface ICReqUserInit {

        /** CReqUserInit nickName */
        nickName?: (string|null);

        /** CReqUserInit firstGeneral */
        firstGeneral?: (number|null);
    }

    /** Represents a CReqUserInit. */
    class CReqUserInit implements ICReqUserInit {

        /**
         * Constructs a new CReqUserInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqUserInit);

        /** CReqUserInit nickName. */
        public nickName: string;

        /** CReqUserInit firstGeneral. */
        public firstGeneral: number;

        /**
         * Creates a new CReqUserInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqUserInit instance
         */
        public static create(properties?: cmsg.ICReqUserInit): cmsg.CReqUserInit;

        /**
         * Encodes the specified CReqUserInit message. Does not implicitly {@link cmsg.CReqUserInit.verify|verify} messages.
         * @param message CReqUserInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqUserInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqUserInit message, length delimited. Does not implicitly {@link cmsg.CReqUserInit.verify|verify} messages.
         * @param message CReqUserInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqUserInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqUserInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqUserInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqUserInit;

        /**
         * Decodes a CReqUserInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqUserInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqUserInit;

        /**
         * Verifies a CReqUserInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqUserInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqUserInit
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqUserInit;

        /**
         * Creates a plain object from a CReqUserInit message. Also converts values to other types if specified.
         * @param message CReqUserInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqUserInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqUserInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespUserInit. */
    interface ICRespUserInit {

        /** CRespUserInit errCode */
        errCode?: (number|null);

        /** CRespUserInit errMsg */
        errMsg?: (string|null);

        /** CRespUserInit nickName */
        nickName?: (string|null);

        /** CRespUserInit firstGeneral */
        firstGeneral?: (number|null);
    }

    /** Represents a CRespUserInit. */
    class CRespUserInit implements ICRespUserInit {

        /**
         * Constructs a new CRespUserInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespUserInit);

        /** CRespUserInit errCode. */
        public errCode: number;

        /** CRespUserInit errMsg. */
        public errMsg: string;

        /** CRespUserInit nickName. */
        public nickName: string;

        /** CRespUserInit firstGeneral. */
        public firstGeneral: number;

        /**
         * Creates a new CRespUserInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespUserInit instance
         */
        public static create(properties?: cmsg.ICRespUserInit): cmsg.CRespUserInit;

        /**
         * Encodes the specified CRespUserInit message. Does not implicitly {@link cmsg.CRespUserInit.verify|verify} messages.
         * @param message CRespUserInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespUserInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespUserInit message, length delimited. Does not implicitly {@link cmsg.CRespUserInit.verify|verify} messages.
         * @param message CRespUserInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespUserInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespUserInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespUserInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespUserInit;

        /**
         * Decodes a CRespUserInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespUserInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespUserInit;

        /**
         * Verifies a CRespUserInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespUserInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespUserInit
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespUserInit;

        /**
         * Creates a plain object from a CRespUserInit message. Also converts values to other types if specified.
         * @param message CRespUserInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespUserInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespUserInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CReqStageFight. */
    interface ICReqStageFight {

        /** CReqStageFight stageID */
        stageID?: (number|null);
    }

    /** Represents a CReqStageFight. */
    class CReqStageFight implements ICReqStageFight {

        /**
         * Constructs a new CReqStageFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICReqStageFight);

        /** CReqStageFight stageID. */
        public stageID: number;

        /**
         * Creates a new CReqStageFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CReqStageFight instance
         */
        public static create(properties?: cmsg.ICReqStageFight): cmsg.CReqStageFight;

        /**
         * Encodes the specified CReqStageFight message. Does not implicitly {@link cmsg.CReqStageFight.verify|verify} messages.
         * @param message CReqStageFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICReqStageFight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CReqStageFight message, length delimited. Does not implicitly {@link cmsg.CReqStageFight.verify|verify} messages.
         * @param message CReqStageFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICReqStageFight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CReqStageFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CReqStageFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CReqStageFight;

        /**
         * Decodes a CReqStageFight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CReqStageFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CReqStageFight;

        /**
         * Verifies a CReqStageFight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CReqStageFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CReqStageFight
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CReqStageFight;

        /**
         * Creates a plain object from a CReqStageFight message. Also converts values to other types if specified.
         * @param message CReqStageFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CReqStageFight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CReqStageFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CRespStageFight. */
    interface ICRespStageFight {

        /** CRespStageFight errCode */
        errCode?: (number|null);

        /** CRespStageFight errMsg */
        errMsg?: (string|null);
    }

    /** Represents a CRespStageFight. */
    class CRespStageFight implements ICRespStageFight {

        /**
         * Constructs a new CRespStageFight.
         * @param [properties] Properties to set
         */
        constructor(properties?: cmsg.ICRespStageFight);

        /** CRespStageFight errCode. */
        public errCode: number;

        /** CRespStageFight errMsg. */
        public errMsg: string;

        /**
         * Creates a new CRespStageFight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CRespStageFight instance
         */
        public static create(properties?: cmsg.ICRespStageFight): cmsg.CRespStageFight;

        /**
         * Encodes the specified CRespStageFight message. Does not implicitly {@link cmsg.CRespStageFight.verify|verify} messages.
         * @param message CRespStageFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cmsg.ICRespStageFight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CRespStageFight message, length delimited. Does not implicitly {@link cmsg.CRespStageFight.verify|verify} messages.
         * @param message CRespStageFight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cmsg.ICRespStageFight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CRespStageFight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CRespStageFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cmsg.CRespStageFight;

        /**
         * Decodes a CRespStageFight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CRespStageFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cmsg.CRespStageFight;

        /**
         * Verifies a CRespStageFight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CRespStageFight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CRespStageFight
         */
        public static fromObject(object: { [k: string]: any }): cmsg.CRespStageFight;

        /**
         * Creates a plain object from a CRespStageFight message. Also converts values to other types if specified.
         * @param message CRespStageFight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cmsg.CRespStageFight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CRespStageFight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
