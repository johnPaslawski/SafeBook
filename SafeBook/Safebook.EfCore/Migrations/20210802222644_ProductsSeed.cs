using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class ProductsSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "DefaultPrice", "Description", "Name", "ProductCategoryId" },
                values: new object[,]
                {
                    { 1, 2.99m, "", "Ołówek 1", 2 },
                    { 2, 3.99m, "", "Ołówek 2", 2 },
                    { 3, 10m, "", "Ołówek 3", 2 },
                    { 4, 25.99m, "", "Kubek 1", 1 },
                    { 5, 10.99m, "", "Kubek 2", 1 },
                    { 6, 14m, "", "Kubek 3", 1 },
                    { 7, 39m, "", "Tłumik skrzypcowy", 3 },
                    { 8, 59m, "", "Tłumik wiolonczelowy", 3 },
                    { 9, 114.99m, "", "Tłumik do trąbki C", 3 },
                    { 10, 108.9m, "", "Pulpit srebrny", 4 },
                    { 11, 190.99m, "", "Pulpit koncertowy - czarny", 4 },
                    { 12, 349.9m, "", "Pulpit Dyrygencki", 4 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

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
    }
}
