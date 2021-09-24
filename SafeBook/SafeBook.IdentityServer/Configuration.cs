using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace SafeBook.IdentityServer
{
    public static class Configuration
    {
        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>()
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };

        public static IEnumerable<ApiResource> ApiResources =>
            new List<ApiResource>()
            {
                new ApiResource("SafeBookApi", new [] { "role" })
                {
                    Scopes = { "PlaceholderScope" }
                }
            };

        public static IEnumerable<ApiScope> ApiScopes =>
            new List<ApiScope>()
            {
                new ApiScope("SafeBookApi"),
                new ApiScope("PlaceholderScope"),
                new ApiScope("role"),
            };

        public static IEnumerable<Client> Clients =>
            new List<Client>()
            {
                new Client()
                {
                    ClientId = "SafeBook",
                    RequireClientSecret = false,
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,

                    RedirectUris = { "https://localhost:44366/signin" },
                    PostLogoutRedirectUris = { "https://localhost:44366/" },
                    AllowedCorsOrigins = { "https://localhost:44366" },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "SafeBookApi",
                        "PlaceholderScope",
                        "role"
                    },

                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 1, // TODO refresh
                }
            };
    }
}
