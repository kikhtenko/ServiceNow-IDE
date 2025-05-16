import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "a8f875124f844d07a2e8c9d1e2680c11"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "6e402b5e4c9c446dbc4ae24988865296"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "d6b3515e8ef34f7d992e860bbe4e3fb9"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "c8b34d73fecd45c2831af1b12c24c7b1"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "c26a59d40345416daea43fc77e62cab8",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "183d739a1f4345208e02c7d366ae96e3",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "57046f9addb947409407085037d17ade",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "1a904be9836122107f44f45f3cda1e48",
                            "key": {
                                "sys_security_acl": "12904be9836122107f44f45f3cda1e45",
                                "sys_user_role": "3d908ba9836122107f44f45f3cda1e1d"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "46904be9836122107f44f45f3cda1e32",
                            "key": {
                                "sys_security_acl": "ce904be9836122107f44f45f3cda1e2d",
                                "sys_user_role": "3d908ba9836122107f44f45f3cda1e1d"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "86904be9836122107f44f45f3cda1e3a",
                            "key": {
                                "sys_security_acl": "8e904be9836122107f44f45f3cda1e36",
                                "sys_user_role": "3d908ba9836122107f44f45f3cda1e1d"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "c6904be9836122107f44f45f3cda1e41",
                            "key": {
                                "sys_security_acl": "ce904be9836122107f44f45f3cda1e3d",
                                "sys_user_role": "3d908ba9836122107f44f45f3cda1e1d"
                            }
                        }
                    ];
            }
        }
    }
}
