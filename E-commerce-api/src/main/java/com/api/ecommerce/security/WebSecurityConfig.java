package com.api.ecommerce.security;

import com.api.ecommerce.security.jwt.JwtTokenVerifier;
import com.api.ecommerce.security.jwt.UserUsernamePasswordAuthenticationFilter;
import com.api.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
   
    private final UserService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final UserService service;

    @Autowired
    public WebSecurityConfig(UserService jwtService, PasswordEncoder passwordEncoder, UserService service) {
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.service = service;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilter(new UserUsernamePasswordAuthenticationFilter(authenticationManager()))
                .addFilterAfter(new JwtTokenVerifier(), UserUsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
                .antMatchers("index", "/login", "/public")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/user/*")
                .permitAll()
                .antMatchers(HttpMethod.POST, "/api/v1/user/register")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/*")
                .permitAll()
                .antMatchers(HttpMethod.GET, "/api/v1/listing/**")
                .permitAll()
                .anyRequest()
                .authenticated();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(service);
        return provider;
    }
    
}
