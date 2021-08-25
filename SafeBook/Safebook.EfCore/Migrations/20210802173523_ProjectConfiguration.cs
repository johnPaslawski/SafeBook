using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SafeBook.EfCore.Migrations
{
    public partial class ProjectConfiguration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 35, 22, 868, DateTimeKind.Local).AddTicks(1520));

            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 35, 22, 872, DateTimeKind.Local).AddTicks(9690));

            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 35, 22, 872, DateTimeKind.Local).AddTicks(9748));

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "Id", "CreationDate", "Description", "ImageName", "Title" },
                values: new object[,]
                {
                    { 1, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8177), "kolejny ładny projekt", null, "Taki fajny projekt" },
                    { 2, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8957), "dobrze kolega mówi, zacny", null, "A ten jaki ładny" },
                    { 3, new DateTime(2021, 8, 2, 19, 35, 22, 873, DateTimeKind.Local).AddTicks(8979), "program ewidentnie im nie leżał", null, "No, ten to nie siadł" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 34, 31, 273, DateTimeKind.Local).AddTicks(5860));

            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 34, 31, 278, DateTimeKind.Local).AddTicks(9326));

            migrationBuilder.UpdateData(
                table: "News",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationDate",
                value: new DateTime(2021, 8, 2, 19, 34, 31, 278, DateTimeKind.Local).AddTicks(9410));
        }
    }
}
