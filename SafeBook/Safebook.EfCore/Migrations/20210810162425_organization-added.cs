using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class organizationadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.AddColumn<int>(
                name: "OrganizationId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Organization",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    REGON = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NIP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    KRS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BankAccountNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organization", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_OrganizationId",
                table: "Users",
                column: "OrganizationId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Organization_OrganizationId",
                table: "Users",
                column: "OrganizationId",
                principalTable: "Organization",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Organization_OrganizationId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Organization");

            migrationBuilder.DropIndex(
                name: "IX_Users_OrganizationId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "OrganizationId",
                table: "Users");

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
    }
}
