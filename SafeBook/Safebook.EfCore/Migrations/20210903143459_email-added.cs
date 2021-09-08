using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class emailadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.InsertData(
                table: "Organization",
                columns: new[] { "Id", "Adress", "BankAccountNumber", "KRS", "NIP", "Name", "REGON" },
                values: new object[] { 1, "Citkowice 32, 32-700 Bochnia", "46 1020 4984 0000 4002 0148 2553", "0000878769", "8681980008", "Stowarzyszenie Partytura", "388006387" });
        }
    }
}
