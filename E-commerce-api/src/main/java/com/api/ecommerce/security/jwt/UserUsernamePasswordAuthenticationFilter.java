package com.api.ecommerce.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;


public class UserUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
 
    private final AuthenticationManager authenticationManager;

    public UserUsernamePasswordAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            UsernameAndPassword usernameAndPassword = new ObjectMapper().readValue(request.getInputStream(), UsernameAndPassword.class);
            Authentication authenticate = new UsernamePasswordAuthenticationToken(
                    usernameAndPassword.getUsername(),
                    usernameAndPassword.getPassword()
            );

            return authenticationManager.authenticate(authenticate);
        }catch (Exception exception){
            throw new RuntimeException(exception);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        String secretKey = "supersucretkeythatnoonecangesssupersucretkeythatnoonecangesssupersucretkeythatnoonecangesssupersucretkeythatnoonecangess";
       
        String token = Jwts.builder()
                .setSubject(authResult.getName())
                .claim("authorities", authResult.getAuthorities())
                .setIssuedAt(new Date())
                .setExpiration(java.sql.Date.valueOf(LocalDate.now().plusWeeks(1)))
                .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()))
                .compact();
        
        response.addHeader("Authorization", "Bearer " + token);
        response.getWriter().write("{ \n\"token\": \"" + token + "\"\n}" );
    }
}
