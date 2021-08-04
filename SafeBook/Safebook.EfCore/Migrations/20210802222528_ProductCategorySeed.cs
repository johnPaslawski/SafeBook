using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class ProductCategorySeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[,]
                {
                    { 1, "Kubki z nadrukiem, muzyczne i inne", "Kubki" },
                    { 2, "Ołówki, długopisy muzyczne i inne", "Artykuły biurowe" },
                    { 3, "Akcesoria do instrumentów smyczkowych i dętych", "Akcesoria do instrumentów" },
                    { 4, "Inne akcesoria, pulpity, lampki i pozostałe", "Akcesoria muzyczne" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ProductCategories",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
