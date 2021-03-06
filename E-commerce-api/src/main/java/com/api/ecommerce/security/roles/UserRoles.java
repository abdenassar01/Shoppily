package com.api.ecommerce.security.roles;

import com.google.common.collect.Sets;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.api.ecommerce.security.roles.UserPermissions.*;

public enum UserRoles {
    
    ADMIN(Sets.newHashSet(USER_READ, USER_WRITE, PRODUCT_READ, PRODUCT_WRITE, ORDER_READ, ORDER_WRITE, STORE_READ, STORE_WRITE, FEEDBACK_READ, FEEDBACK_WRITE, LISTING_READ, LISTING_WRITE)),
    USER(Sets.newHashSet(PRODUCT_READ, STORE_READ, LISTING_READ, ORDER_READ, ORDER_WRITE, FEEDBACK_READ, FEEDBACK_WRITE)),
    SELLER(Sets.newHashSet(PRODUCT_READ, STORE_READ, LISTING_READ, ORDER_READ, ORDER_WRITE, FEEDBACK_READ, FEEDBACK_WRITE, LISTING_WRITE, STORE_WRITE));

    private final Set<UserPermissions> permissions;

    UserRoles(Set<UserPermissions> permissions) {
        this.permissions = permissions;
    }

    public Set<UserPermissions> getPermissions() {
        return permissions;
    }


    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}
