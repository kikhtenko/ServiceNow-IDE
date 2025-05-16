import { Acl } from "@servicenow/sdk/core";

export default Acl({
    $id: "ce904be9836122107f44f45f3cda1e2d",
    script: ``,
    active: true,
    admin_overrides: true,
    decision_type: "allow",
    description: "Default access control on x_snc_cust_a_saf_simple_demo",
    local_or_existing: "Local",
    type: "record",
    table: "x_snc_cust_a_saf_simple_demo",
    operation: "create",
    roles: ["3d908ba9836122107f44f45f3cda1e1d"]
});
