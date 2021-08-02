using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class ProductAndProductCategoryAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DefaultPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ProductCategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_ProductCategories_ProductCategoryId",
                        column: x => x.ProductCategoryId,
                        principalTable: "ProductCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_ProductCategoryId",
                table: "Products",
                column: "ProductCategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 1, "Krótka 4/56", null, new DateTime(2021, 8, 2, 19, 41, 56, 336, DateTimeKind.Local).AddTicks(9042), "Kraków", null, "Adam", "Stary", null, null, "30-004", 1, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 2, "Długa 98/3", null, new DateTime(2021, 8, 2, 19, 41, 56, 340, DateTimeKind.Local).AddTicks(7836), "Poznań", null, "Magda", "Młoda", null, null, "23-323", 2, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AdressLine1", "AdressLine2", "BirthDate", "City", "Country", "FirstName", "LastName", "PhoneNumber", "PhoneNumber2", "PostalCode", "RoleId", "SecondtName" },
                values: new object[] { 3, "Lipna 10/5c", null, new DateTime(2021, 8, 2, 19, 41, 56, 340, DateTimeKind.Local).AddTicks(7885), "Kraków", null, "Lech", "Nijaki", null, null, "50-111", 3, null });
        }
    }
}
