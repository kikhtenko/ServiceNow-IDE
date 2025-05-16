import { StringColumn, Table } from "@servicenow/sdk/core";

export const x_snc_cust_a_saf_simple_demo = Table({
    name: "x_snc_cust_a_saf_simple_demo",
    label: "Simple Demo",
    scriptable_table: false,
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    accessible_from: "public",
    actions: ["read"],
    schema: {
        sample_string: StringColumn({
            label: "Sample string",
            maxLength: 300
        })
    }
});
