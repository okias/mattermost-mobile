// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable max-lines */

import {MM_TABLES} from '@constants/database';

import {serverSchema} from './index';

const {
    CATEGORY,
    CATEGORY_CHANNEL,
    CHANNEL,
    CHANNEL_INFO,
    CHANNEL_MEMBERSHIP,
    CUSTOM_EMOJI,
    DRAFT,
    FILE,
    GROUP,
    GROUPS_CHANNEL,
    GROUPS_TEAM,
    GROUP_MEMBERSHIP,
    MY_CHANNEL,
    MY_CHANNEL_SETTINGS,
    MY_TEAM,
    POST,
    POSTS_IN_CHANNEL,
    POSTS_IN_THREAD,
    PREFERENCE,
    REACTION,
    ROLE,
    SLASH_COMMAND,
    SYSTEM,
    TEAM,
    TEAM_CHANNEL_HISTORY,
    TEAM_MEMBERSHIP,
    TEAM_SEARCH_HISTORY,
    TERMS_OF_SERVICE,
    USER,
} = MM_TABLES.SERVER;

describe('*** Test schema for SERVER database ***', () => {
    it('=> The SERVER SCHEMA should strictly match', () => {
        expect(serverSchema).toEqual({
            version: 1,
            tables: {
                [CATEGORY]: {
                    name: CATEGORY,
                    unsafeSql: undefined,
                    columns: {
                        display_name: {name: 'display_name', type: 'string'},
                        type: {name: 'type', type: 'string'},
                        sort_order: {name: 'sort_order', type: 'number'},
                        sorting: {name: 'sorting', type: 'string'},
                        muted: {name: 'muted', type: 'boolean'},
                        collapsed: {name: 'collapsed', type: 'boolean'},
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'display_name', type: 'string'},
                        {name: 'type', type: 'string'},
                        {name: 'sort_order', type: 'number'},
                        {name: 'sorting', type: 'string'},
                        {name: 'muted', type: 'boolean'},
                        {name: 'collapsed', type: 'boolean'},
                        {name: 'team_id', type: 'string', isIndexed: true},
                    ],
                },
                [CATEGORY_CHANNEL]: {
                    name: CATEGORY_CHANNEL,
                    unsafeSql: undefined,
                    columns: {
                        category_id: {name: 'category_id', type: 'string', isIndexed: true},
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        sort_order: {name: 'sort_order', type: 'number'},
                    },
                    columnArray: [
                        {name: 'category_id', type: 'string', isIndexed: true},
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'sort_order', type: 'number'},
                    ],
                },
                [CHANNEL_INFO]: {
                    name: CHANNEL_INFO,
                    unsafeSql: undefined,
                    columns: {
                        guest_count: {name: 'guest_count', type: 'number'},
                        header: {name: 'header', type: 'string'},
                        member_count: {name: 'member_count', type: 'number'},
                        pinned_post_count: {name: 'pinned_post_count', type: 'number'},
                        purpose: {name: 'purpose', type: 'string'},
                    },
                    columnArray: [
                        {name: 'guest_count', type: 'number'},
                        {name: 'header', type: 'string'},
                        {name: 'member_count', type: 'number'},
                        {name: 'pinned_post_count', type: 'number'},
                        {name: 'purpose', type: 'string'},
                    ],
                },
                [CHANNEL]: {
                    name: CHANNEL,
                    unsafeSql: undefined,
                    columns: {
                        create_at: {name: 'create_at', type: 'number'},
                        creator_id: {name: 'creator_id', type: 'string', isIndexed: true},
                        delete_at: {name: 'delete_at', type: 'number'},
                        display_name: {name: 'display_name', type: 'string'},
                        is_group_constrained: {
                            name: 'is_group_constrained',
                            type: 'boolean',
                        },
                        name: {name: 'name', type: 'string', isIndexed: true},
                        shared: {name: 'shared', type: 'boolean'},
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                        type: {name: 'type', type: 'string'},
                        update_at: {name: 'update_at', type: 'number'},

                    },
                    columnArray: [
                        {name: 'create_at', type: 'number'},
                        {name: 'creator_id', type: 'string', isIndexed: true},
                        {name: 'delete_at', type: 'number'},
                        {name: 'display_name', type: 'string'},
                        {name: 'is_group_constrained', type: 'boolean'},
                        {name: 'name', type: 'string', isIndexed: true},
                        {name: 'shared', type: 'boolean'},
                        {name: 'team_id', type: 'string', isIndexed: true},
                        {name: 'type', type: 'string'},
                        {name: 'update_at', type: 'number'},
                    ],
                },
                [CHANNEL_MEMBERSHIP]: {
                    name: CHANNEL_MEMBERSHIP,
                    unsafeSql: undefined,
                    columns: {
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'user_id', type: 'string', isIndexed: true},
                    ],
                },
                [CUSTOM_EMOJI]: {
                    name: CUSTOM_EMOJI,
                    unsafeSql: undefined,
                    columns: {
                        name: {name: 'name', type: 'string'},
                    },
                    columnArray: [{name: 'name', type: 'string'}],
                },
                [MY_CHANNEL]: {
                    name: MY_CHANNEL,
                    unsafeSql: undefined,
                    columns: {
                        last_post_at: {name: 'last_post_at', type: 'number'},
                        last_viewed_at: {name: 'last_viewed_at', type: 'number'},
                        manually_unread: {name: 'manually_unread', type: 'boolean'},
                        mentions_count: {name: 'mentions_count', type: 'number'},
                        message_count: {name: 'message_count', type: 'number'},
                        is_unread: {name: 'is_unread', type: 'boolean'},
                        roles: {name: 'roles', type: 'string'},
                        viewed_at: {name: 'viewed_at', type: 'number'},
                    },
                    columnArray: [
                        {name: 'last_post_at', type: 'number'},
                        {name: 'last_viewed_at', type: 'number'},
                        {name: 'manually_unread', type: 'boolean'},
                        {name: 'mentions_count', type: 'number'},
                        {name: 'message_count', type: 'number'},
                        {name: 'is_unread', type: 'boolean'},
                        {name: 'roles', type: 'string'},
                        {name: 'viewed_at', type: 'number'},
                    ],
                },
                [MY_CHANNEL_SETTINGS]: {
                    name: MY_CHANNEL_SETTINGS,
                    unsafeSql: undefined,
                    columns: {
                        notify_props: {name: 'notify_props', type: 'string'},
                    },
                    columnArray: [
                        {name: 'notify_props', type: 'string'},
                    ],
                },
                [POSTS_IN_CHANNEL]: {
                    name: POSTS_IN_CHANNEL,
                    unsafeSql: undefined,
                    columns: {
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        earliest: {name: 'earliest', type: 'number'},
                        latest: {name: 'latest', type: 'number'},
                    },
                    columnArray: [
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'earliest', type: 'number'},
                        {name: 'latest', type: 'number'},
                    ],
                },
                [DRAFT]: {
                    name: DRAFT,
                    unsafeSql: undefined,
                    columns: {
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        files: {name: 'files', type: 'string'},
                        message: {name: 'message', type: 'string'},
                        root_id: {name: 'root_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'files', type: 'string'},
                        {name: 'message', type: 'string'},
                        {name: 'root_id', type: 'string', isIndexed: true},
                    ],
                },
                [FILE]: {
                    name: FILE,
                    unsafeSql: undefined,
                    columns: {
                        extension: {name: 'extension', type: 'string'},
                        height: {name: 'height', type: 'number'},
                        image_thumbnail: {name: 'image_thumbnail', type: 'string'},
                        local_path: {name: 'local_path', type: 'string'},
                        mime_type: {name: 'mime_type', type: 'string'},
                        name: {name: 'name', type: 'string'},
                        post_id: {name: 'post_id', type: 'string', isIndexed: true},
                        size: {name: 'size', type: 'number'},
                        width: {name: 'width', type: 'number'},
                    },
                    columnArray: [
                        {name: 'extension', type: 'string'},
                        {name: 'height', type: 'number'},
                        {name: 'image_thumbnail', type: 'string'},
                        {name: 'local_path', type: 'string'},
                        {name: 'mime_type', type: 'string'},
                        {name: 'name', type: 'string'},
                        {name: 'post_id', type: 'string', isIndexed: true},
                        {name: 'size', type: 'number'},
                        {name: 'width', type: 'number'},
                    ],
                },
                [POSTS_IN_THREAD]: {
                    name: POSTS_IN_THREAD,
                    unsafeSql: undefined,
                    columns: {
                        root_id: {name: 'root_id', type: 'string', isIndexed: true},
                        earliest: {name: 'earliest', type: 'number'},
                        latest: {name: 'latest', type: 'number'},
                    },
                    columnArray: [
                        {name: 'root_id', type: 'string', isIndexed: true},
                        {name: 'earliest', type: 'number'},
                        {name: 'latest', type: 'number'},
                    ],
                },
                [POST]: {
                    name: POST,
                    unsafeSql: undefined,
                    columns: {
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        create_at: {name: 'create_at', type: 'number'},
                        delete_at: {name: 'delete_at', type: 'number'},
                        update_at: {name: 'update_at', type: 'number'},
                        edit_at: {name: 'edit_at', type: 'number'},
                        is_pinned: {name: 'is_pinned', type: 'boolean'},
                        message: {name: 'message', type: 'string'},
                        metadata: {name: 'metadata', type: 'string', isOptional: true},
                        original_id: {name: 'original_id', type: 'string'},
                        pending_post_id: {name: 'pending_post_id', type: 'string', isIndexed: true},
                        previous_post_id: {name: 'previous_post_id', type: 'string'},
                        props: {name: 'props', type: 'string'},
                        root_id: {name: 'root_id', type: 'string'},
                        type: {name: 'type', type: 'string'},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'create_at', type: 'number'},
                        {name: 'delete_at', type: 'number'},
                        {name: 'update_at', type: 'number'},
                        {name: 'edit_at', type: 'number'},
                        {name: 'is_pinned', type: 'boolean'},
                        {name: 'message', type: 'string'},
                        {name: 'metadata', type: 'string', isOptional: true},
                        {name: 'original_id', type: 'string'},
                        {name: 'pending_post_id', type: 'string', isIndexed: true},
                        {name: 'previous_post_id', type: 'string'},
                        {name: 'props', type: 'string'},
                        {name: 'root_id', type: 'string'},
                        {name: 'type', type: 'string'},
                        {name: 'user_id', type: 'string', isIndexed: true},
                    ],
                },
                [GROUP]: {
                    name: GROUP,
                    unsafeSql: undefined,
                    columns: {
                        allow_reference: {name: 'allow_reference', type: 'boolean'},
                        delete_at: {name: 'delete_at', type: 'number'},
                        display_name: {name: 'display_name', type: 'string'},
                        name: {name: 'name', type: 'string'},
                    },
                    columnArray: [
                        {name: 'allow_reference', type: 'boolean'},
                        {name: 'delete_at', type: 'number'},
                        {name: 'display_name', type: 'string'},
                        {name: 'name', type: 'string'},
                    ],
                },
                [GROUPS_CHANNEL]: {
                    name: GROUPS_CHANNEL,
                    unsafeSql: undefined,
                    columns: {
                        channel_id: {name: 'channel_id', type: 'string', isIndexed: true},
                        group_id: {name: 'group_id', type: 'string', isIndexed: true},
                        member_count: {name: 'member_count', type: 'number'},
                        timezone_count: {name: 'timezone_count', type: 'number'},
                    },
                    columnArray: [
                        {name: 'channel_id', type: 'string', isIndexed: true},
                        {name: 'group_id', type: 'string', isIndexed: true},
                        {name: 'member_count', type: 'number'},
                        {name: 'timezone_count', type: 'number'},
                    ],
                },
                [GROUPS_TEAM]: {
                    name: GROUPS_TEAM,
                    unsafeSql: undefined,
                    columns: {
                        group_id: {name: 'group_id', type: 'string', isIndexed: true},
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'group_id', type: 'string', isIndexed: true},
                        {name: 'team_id', type: 'string', isIndexed: true},
                    ],
                },
                [GROUP_MEMBERSHIP]: {
                    name: GROUP_MEMBERSHIP,
                    unsafeSql: undefined,
                    columns: {
                        group_id: {name: 'group_id', type: 'string', isIndexed: true},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'group_id', type: 'string', isIndexed: true},
                        {name: 'user_id', type: 'string', isIndexed: true},
                    ],
                },
                [PREFERENCE]: {
                    name: PREFERENCE,
                    unsafeSql: undefined,
                    columns: {
                        category: {name: 'category', type: 'string', isIndexed: true},
                        name: {name: 'name', type: 'string'},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                        value: {name: 'value', type: 'string'},
                    },
                    columnArray: [
                        {name: 'category', type: 'string', isIndexed: true},
                        {name: 'name', type: 'string'},
                        {name: 'user_id', type: 'string', isIndexed: true},
                        {name: 'value', type: 'string'},
                    ],
                },
                [REACTION]: {
                    name: REACTION,
                    unsafeSql: undefined,
                    columns: {
                        create_at: {name: 'create_at', type: 'number'},
                        emoji_name: {name: 'emoji_name', type: 'string'},
                        post_id: {name: 'post_id', type: 'string', isIndexed: true},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'create_at', type: 'number'},
                        {name: 'emoji_name', type: 'string'},
                        {name: 'post_id', type: 'string', isIndexed: true},
                        {name: 'user_id', type: 'string', isIndexed: true},
                    ],
                },
                [MY_TEAM]: {
                    name: MY_TEAM,
                    unsafeSql: undefined,
                    columns: {
                        roles: {name: 'roles', type: 'string'},
                    },
                    columnArray: [
                        {name: 'roles', type: 'string'},
                    ],
                },
                [ROLE]: {
                    name: ROLE,
                    unsafeSql: undefined,
                    columns: {
                        name: {name: 'name', type: 'string'},
                        permissions: {name: 'permissions', type: 'string'},
                    },
                    columnArray: [
                        {name: 'name', type: 'string'},
                        {name: 'permissions', type: 'string'},
                    ],
                },
                [SLASH_COMMAND]: {
                    name: SLASH_COMMAND,
                    unsafeSql: undefined,
                    columns: {
                        is_auto_complete: {name: 'is_auto_complete', type: 'boolean'},
                        description: {name: 'description', type: 'string'},
                        display_name: {name: 'display_name', type: 'string'},
                        hint: {name: 'hint', type: 'string'},
                        method: {name: 'method', type: 'string'},
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                        token: {name: 'token', type: 'string'},
                        trigger: {name: 'trigger', type: 'string'},
                        update_at: {name: 'update_at', type: 'number'},
                    },
                    columnArray: [
                        {name: 'is_auto_complete', type: 'boolean'},
                        {name: 'description', type: 'string'},
                        {name: 'display_name', type: 'string'},
                        {name: 'hint', type: 'string'},
                        {name: 'method', type: 'string'},
                        {name: 'team_id', type: 'string', isIndexed: true},
                        {name: 'token', type: 'string'},
                        {name: 'trigger', type: 'string'},
                        {name: 'update_at', type: 'number'},
                    ],
                },
                [SYSTEM]: {
                    name: SYSTEM,
                    unsafeSql: undefined,
                    columns: {
                        value: {name: 'value', type: 'string'},
                    },
                    columnArray: [
                        {name: 'value', type: 'string'},
                    ],
                },
                [TEAM]: {
                    name: TEAM,
                    unsafeSql: undefined,
                    columns: {
                        is_allow_open_invite: {
                            name: 'is_allow_open_invite',
                            type: 'boolean',
                        },
                        allowed_domains: {name: 'allowed_domains', type: 'string'},
                        description: {name: 'description', type: 'string'},
                        display_name: {name: 'display_name', type: 'string'},
                        is_group_constrained: {
                            name: 'is_group_constrained',
                            type: 'boolean',
                        },
                        last_team_icon_updated_at: {
                            name: 'last_team_icon_updated_at',
                            type: 'number',
                        },
                        name: {name: 'name', type: 'string'},
                        type: {name: 'type', type: 'string'},
                        update_at: {name: 'update_at', type: 'number'},
                    },
                    columnArray: [
                        {name: 'is_allow_open_invite', type: 'boolean'},
                        {name: 'allowed_domains', type: 'string'},
                        {name: 'description', type: 'string'},
                        {name: 'display_name', type: 'string'},
                        {name: 'is_group_constrained', type: 'boolean'},
                        {name: 'last_team_icon_updated_at', type: 'number'},
                        {name: 'name', type: 'string'},
                        {name: 'type', type: 'string'},
                        {name: 'update_at', type: 'number'},
                    ],
                },
                [TEAM_CHANNEL_HISTORY]: {
                    name: TEAM_CHANNEL_HISTORY,
                    unsafeSql: undefined,
                    columns: {
                        channel_ids: {name: 'channel_ids', type: 'string'},
                    },
                    columnArray: [
                        {name: 'channel_ids', type: 'string'},
                    ],
                },
                [TEAM_MEMBERSHIP]: {
                    name: TEAM_MEMBERSHIP,
                    unsafeSql: undefined,
                    columns: {
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                        user_id: {name: 'user_id', type: 'string', isIndexed: true},
                    },
                    columnArray: [
                        {name: 'team_id', type: 'string', isIndexed: true},
                        {name: 'user_id', type: 'string', isIndexed: true},
                    ],
                },
                [TEAM_SEARCH_HISTORY]: {
                    name: TEAM_SEARCH_HISTORY,
                    unsafeSql: undefined,
                    columns: {
                        created_at: {name: 'created_at', type: 'number'},
                        display_term: {name: 'display_term', type: 'string'},
                        team_id: {name: 'team_id', type: 'string', isIndexed: true},
                        term: {name: 'term', type: 'string'},
                    },
                    columnArray: [
                        {name: 'created_at', type: 'number'},
                        {name: 'display_term', type: 'string'},
                        {name: 'team_id', type: 'string', isIndexed: true},
                        {name: 'term', type: 'string'},
                    ],
                },
                [TERMS_OF_SERVICE]: {
                    name: TERMS_OF_SERVICE,
                    unsafeSql: undefined,
                    columns: {
                        accepted_at: {name: 'accepted_at', type: 'number'},
                    },
                    columnArray: [{name: 'accepted_at', type: 'number'}],
                },
                [USER]: {
                    name: USER,
                    unsafeSql: undefined,
                    columns: {
                        auth_service: {name: 'auth_service', type: 'string'},
                        update_at: {name: 'update_at', type: 'number'},
                        delete_at: {name: 'delete_at', type: 'number'},
                        email: {name: 'email', type: 'string'},
                        first_name: {name: 'first_name', type: 'string'},
                        is_bot: {name: 'is_bot', type: 'boolean'},
                        is_guest: {name: 'is_guest', type: 'boolean'},
                        last_name: {name: 'last_name', type: 'string'},
                        last_picture_update: {
                            name: 'last_picture_update',
                            type: 'number',
                        },
                        locale: {name: 'locale', type: 'string'},
                        nickname: {name: 'nickname', type: 'string'},
                        notify_props: {name: 'notify_props', type: 'string'},
                        position: {name: 'position', type: 'string'},
                        props: {name: 'props', type: 'string'},
                        roles: {name: 'roles', type: 'string'},
                        status: {name: 'status', type: 'string'},
                        timezone: {name: 'timezone', type: 'string'},
                        username: {name: 'username', type: 'string'},
                    },
                    columnArray: [
                        {name: 'auth_service', type: 'string'},
                        {name: 'update_at', type: 'number'},
                        {name: 'delete_at', type: 'number'},
                        {name: 'email', type: 'string'},
                        {name: 'first_name', type: 'string'},
                        {name: 'is_bot', type: 'boolean'},
                        {name: 'is_guest', type: 'boolean'},
                        {name: 'last_name', type: 'string'},
                        {name: 'last_picture_update', type: 'number'},
                        {name: 'locale', type: 'string'},
                        {name: 'nickname', type: 'string'},
                        {name: 'notify_props', type: 'string'},
                        {name: 'position', type: 'string'},
                        {name: 'props', type: 'string'},
                        {name: 'roles', type: 'string'},
                        {name: 'status', type: 'string'},
                        {name: 'timezone', type: 'string'},
                        {name: 'username', type: 'string'},
                    ],
                },
            },
        });
    });
});