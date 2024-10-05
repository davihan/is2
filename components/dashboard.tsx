export default function Dashboard() {
    let today = new Date();
    console.log('today:', today);
    return (
        <div class="">
            <div>
                <h1 class="text-2xl">Bi</h1>
                <h2 class="text-xl">{today.toLocaleDateString()}</h2>
                <div class="flex gap-1">
                    <input type="checkbox" name="bi_ctena_dnes" id="bi_ctena_dnes" />
                    přečtena
                </div>
            </div>

        </div>
    );
}