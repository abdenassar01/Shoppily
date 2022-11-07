package com.api.ecommerce.security.roles;

public enum UserPermissions {

    PRODUCT_READ("product:read"),
    PRODUCT_WRITE("product:write"),
    USER_READ("user:read"),
    USER_WRITE("user:write"),
    STORE_READ("store:read"),
    STORE_WRITE("store:write"),
    ORDER_READ("order:read"),
    ORDER_WRITE("order:write"),
    FEEDBACK_READ("feedback:read"),
    FEEDBACK_WRITE("feedback:write"),
    LISTING_READ("listing:read"),
    LISTING_WRITE("listing:write");

    public String getPermission() {
        return permission;
    }

    private final String permission;

    UserPermissions(String permission) {
        this.permission = permission;
    }
}
